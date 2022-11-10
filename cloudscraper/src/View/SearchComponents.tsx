import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, PrimaryButton, SelectionMode, TextField } from "@fluentui/react";
import React, { useState } from "react";
import { ISearchComponents } from "../Model/Interfaces/ISearchComponents";
import { RenderSitesList } from "./RenderSitesList";


export const SearchComponents = (props: ISearchComponents) => {
    let searchArgs: string = "";
    let _columns: IColumn[];
    const [sortArg, setSortArg] = useState("")


    _columns = [
        { key: 'column1', name: 'Name', fieldName: 'displayName', minWidth: 100, maxWidth: 300, isResizable: true,},
        { key: 'column2', name: 'URL', fieldName: 'webUrl', minWidth: 100, maxWidth: 350, isResizable: true},
        { key: 'column3', name: 'Owner', fieldName: 'SiteOwner', minWidth: 150, maxWidth: 200, isResizable: true},
        { key: 'column4', name: 'Description', fieldName: 'Description', minWidth: 150, maxWidth: 350, isResizable: true},
        { key: 'column5', name: 'Date Modified', fieldName: 'LastModifiedDateTime', minWidth: 100, maxWidth: 300, isResizable: true},
        { key: 'column6', name: 'Date Created', fieldName: 'CreatedDateTime', minWidth: 100, maxWidth: 350, isResizable: true}
        ];

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
                    await props.RequestSitesFunc(props.setSitesListFunc, props.userAccessToken, searchArgs, sortArg);
                }}
            />


            <RenderSitesList sitesArray={props.sitesList} sortArg={sortArg} setSortarg={setSortArg}/>
        </>
    )

    // function Sort(ev: React.MouseEvent<HTMLElement>, column: IColumn, sortArg: string): void => {
        
    // }
}


