import { IStackTokens, PrimaryButton, SearchBox, Stack, StackItem } from "@fluentui/react";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestSites } from "../Model/RequestSites";

export const SearchComponents = () => {
    const appContext = useContext(AppContext);

    const LoadSites = async (): Promise<void> => {
        await RequestSites(appContext.appContext)
    }

    const stackTokens: IStackTokens = { 
        childrenGap: 10
    }
    
    return (
        <Stack horizontalAlign="center" horizontal={true} tokens={stackTokens}>
            <StackItem>
                <SearchBox
                    placeholder="Search for a site..."
                    className="SearchBox"
                    onChange={(ev: React.ChangeEvent<HTMLInputElement> | undefined, text?: string): void => {
                        if (text) {
                            appContext.appContext.searchArgs = text as string;
                            console.log(appContext.appContext.searchArgs);
                        }
                        else {
                            appContext.appContext.searchArgs = "";
                            console.log("No text")
                        }
                    }}
                    onSearch={newValue => {
                        console.log(newValue);
                        appContext.appContext.searchArgs = newValue;
                        RequestSites(appContext.appContext);
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