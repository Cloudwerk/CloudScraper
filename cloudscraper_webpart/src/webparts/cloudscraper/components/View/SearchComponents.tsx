import * as React from "react";
import { PrimaryButton, SearchBox, Stack, StackItem } from "@fluentui/react";
import { IStackTokens } from "@fluentui/react/lib/components/Stack/Stack.types";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { getSites } from "../Model/getSites";

export const SearchComponents = () => {
    const appContext = useContext(AppContext).appContext;

    const LoadSites = async (): Promise<void> => {
        await getSites(appContext)
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
                            console.log(text);
                        }
                        else {
                            appContext.searchArgs = "*";
                        }
                    }}
                    onSearch={newValue => {
                        console.log(newValue);
                        appContext.searchArgs = newValue; // Kann eventuell weggelassen werden?
                        getSites(appContext)
                            .then(() => {
                                Promise.resolve();
                            });
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