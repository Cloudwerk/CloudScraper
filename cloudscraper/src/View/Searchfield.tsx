import { SearchBox } from "@fluentui/react";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestSites } from "../Model/RequestSites";

export const Searchfield = () => {
    const appContext = useContext(AppContext);
    
    return (
        <SearchBox
            placeholder="Search for a site..."
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
    );
}