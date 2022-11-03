import { DetailsList, IColumn, SelectionMode } from '@fluentui/react';
import React, { useState } from 'react';
import { testdata } from '../Model/Testdata';
import { ISitesArrayInterface } from '../Model/Interfaces/ISitesArrayInterface';
import { IAppServiceInterface } from '../Model/Interfaces/IAppServicesInterface';


// export interface IListItem {
//     title: string;
//     url: string;
//     siteOwner: String;
//     description: string;
//     lastEdited: string;
//     dateCreated: string;
// }

// export interface IListArray {
//     items: ISitesArrayInterface[]
// }

export function RenderSitesList(props: IAppServiceInterface) {
    // props.appServices.RequestSites()
    let _columns: IColumn[];


        _columns = [
            { key: 'column1', name: 'Name', fieldName: 'SiteName', isResizable: true, minWidth: 100, maxWidth: 200},
            { key: 'column2', name: 'URL', fieldName: 'Url', isResizable: true, minWidth: 100, maxWidth: 250,},
            { key: 'column3', name: 'Owner', fieldName: 'SiteOwner', isResizable: true, minWidth: 150, maxWidth: 200},
            { key: 'column4', name: 'Description', fieldName: 'Description', isResizable: true, minWidth: 150, maxWidth: 250},
            { key: 'column5', name: 'Date Modified', fieldName: 'DateModified', isResizable: true, minWidth: 100, maxWidth: 100},
            { key: 'column6', name: 'Date Created', fieldName: 'DateCreated', isResizable: true, minWidth: 100, maxWidth: 150}
            ];

        return (
            <>
                <DetailsList
                items={props.appServices.sitesList}
                columns={_columns}
                selectionMode={SelectionMode.none}
                />
            </>
        )
}
