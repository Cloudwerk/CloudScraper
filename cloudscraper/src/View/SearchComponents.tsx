import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, PrimaryButton, SelectionMode, TextField } from "@fluentui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RenderSitesList } from "./RenderSitesList";
import { RequestSites } from "../Model/RequestSites";


export const SearchComponents = () => {
    let searchArgs: string = "";
    let _columns: IColumn[];
    const [sortArg, setSortArg] = useState("")
    const appContext = useContext(AppContext)

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


            <RenderSitesList />
        </>
    )

    // function Sort(ev: React.MouseEvent<HTMLElement>, column: IColumn, sortArg: string): void => {
        
    // }
}


