import { TextField } from "@fluentui/react";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";

export const Searchbox = () => {
    const appContext = useContext(AppContext);
    
    return (
        <TextField
            placeholder="Search for a site..."
            onChange={(ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
                if (text) {
                    appContext.appContext.searchArgs = text as string;
                    console.log(appContext.appContext.searchArgs);
                }
                else {
                    appContext.appContext.searchArgs = "";
                    console.log("No text")
                }
            }}
        />
    );
}