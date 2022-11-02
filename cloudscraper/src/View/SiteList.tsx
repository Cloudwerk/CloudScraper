import { DetailsList, IColumn, SelectionMode } from '@fluentui/react';
import React from 'react';
import { testdata } from '../Model/Testdata';


export interface IListItem {
    title: string;
    url: string;
    siteOwner: String;
    description: string;
    lastEdited: string;
    dateCreated: string;
}

export interface IListArray {
    items: IListItem[]
}

export class SiteList extends React.Component<{}, IListArray> {
    private _allItems: IListItem[];
    private _columns: IColumn[];

    constructor(props: IListArray) {
        super(props);

        const itemsVar = testdata;

        this._allItems = [];
        for (let i = 0; i < itemsVar.length; i++) {
            this._allItems.push({
                title: itemsVar[i].title,
                url: itemsVar[i].url,
                siteOwner: itemsVar[i].siteOwner,
                description: itemsVar[i].description,
                lastEdited: itemsVar[i].lastEdited,
                dateCreated: itemsVar[i].dateCreated
            })
        };

        this._columns = [
            { key: 'column1', name: 'Name', fieldName: 'title', isResizable: true, minWidth: 100, maxWidth: 200},
            { key: 'column2', name: 'URL', fieldName: 'url', isResizable: true, minWidth: 100, maxWidth: 250,},
            { key: 'column3', name: 'Owner', fieldName: 'siteOwner', isResizable: true, minWidth: 150, maxWidth: 200},
            { key: 'column4', name: 'Description', fieldName: 'description', isResizable: true, minWidth: 150, maxWidth: 250},
            { key: 'column5', name: 'Last Edited', fieldName: 'lastEdited', isResizable: true, minWidth: 100, maxWidth: 100},
            { key: 'column6', name: 'Date Created', fieldName: 'dateCreated', isResizable: true, minWidth: 50, maxWidth: 100}
            ];

            this.state = {
                items: this._allItems
            }
    }


    public render(): JSX.Element {
        return (
            <div>
                <DetailsList
                    items={testdata}
                    columns={this._columns}
                    selectionMode={SelectionMode.none}
    
                />
            </div>
        )
    }

    //private _onClick() = (ev: React.MouseEvent<HTMLInputElement>, column: IColumn): void => {

}
