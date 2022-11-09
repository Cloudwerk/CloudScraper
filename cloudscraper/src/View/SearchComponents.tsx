import { PrimaryButton, TextField } from "@fluentui/react";
import React from "react";
import { ISearchComponents } from "../Model/Interfaces/ISearchComponents";


export const SearchComponents = (props: ISearchComponents) => {
    let searchArgs: string = "";

    return (
        <>
            <TextField
                placeholder="Search for a site..."
                onChange={(ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
                    if (text) {
                        searchArgs = text as string;
                        console.log(searchArgs);
                    }
                    else {
                        searchArgs = "";
                        console.log("No text")
                    }
                }}
            />

            <PrimaryButton
            label="RequestSitesBtn"
            text="Load Sites"
            onClick={async (): Promise<void> => {
                await props.RequestSitesFunc(props.setSitesListFunc, props.userAccessToken, searchArgs);
            }}
            />
        </>
    )
}
