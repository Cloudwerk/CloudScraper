import React from "react";
import { PrimaryButton, SearchBox, Stack, StackItem } from "@fluentui/react";
import { IStackTokens } from "@fluentui/react/lib/components/Stack/Stack.types";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestSites } from "../Model/RequestSites";

export const SearchComponents = () => {
    const appContext = useContext(AppContext).appContext;

    const LoadSites = async (): Promise<void> => {
        await RequestSites(appContext)
    }

    const stackTokens: IStackTokens = { 
        childrenGap: 10
    }

    const SearchBoxToken: IStackTokens = {
        maxWidth: 500,
    }
    
    return (
        <Stack horizontalAlign="center" horizontal={true} tokens={stackTokens}>
            <StackItem tokens={SearchBoxToken}>
                <SearchBox
                    placeholder="Search for a site..."
                    onChange={(ev: React.ChangeEvent<HTMLInputElement> | undefined, text?: string): void => {
                        if (text) {
                            appContext.searchArgs = text as string;
                        }
                        else {
                            appContext.searchArgs = "*";
                        }
                    }}
                    onSearch={newValue => {
                        console.log(newValue);
                        appContext.searchArgs = newValue; // Kann eventuell weggelassen werden?
                        RequestSites(appContext);
                    }}
                />
            </StackItem>
        
            <StackItem>
                <PrimaryButton
                    label="RequestSitesBtn"
                    text="Load Sites"
                    onClick={LoadSites}
                />
            </StackItem>
        </Stack>

    );
}