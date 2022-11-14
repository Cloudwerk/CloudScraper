import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, Link, SelectionMode } from '@fluentui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Model/Context/AppContext';
import { IRenderSitesListProps } from '../Model/Interfaces/IRenderSitesListProps';

export const RenderSitesList = (props: IRenderSitesListProps) => {
    let _columns: IColumn[];
    const appContext = useContext(AppContext)


    _columns = [
        { key: 'name', name: 'Name', fieldName: 'SiteName', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort, },
        { key: 'webUrl', name: 'URL', fieldName: 'Url', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort}, // Add sorting properties
        { key: '', name: 'Owner', fieldName: 'SiteOwner', minWidth: 150, maxWidth: 200, isResizable: true, onColumnClick: Sort},
        { key: 'Description', name: 'Description', fieldName: 'Description', minWidth: 150, maxWidth: 350, isResizable: true, onColumnClick: Sort},
        { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort},
        { key: 'createdDateTime', name: 'Date Created', fieldName: 'DateCreated', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort}
        ];

    return (
        <>
            <DetailsList
            setKey={"key"}
            items={props.sitesList}
            columns={_columns}
            selectionMode={SelectionMode.none}
            layoutMode={DetailsListLayoutMode.fixedColumns}
            constrainMode={ConstrainMode.unconstrained}
            />
        </>
    )
        
    function Sort(ev: React.MouseEvent<HTMLElement>, column: IColumn): void {
        if (column.key !== appContext.appContext.sortArgs) {
            appContext.appContext.sortArgs = ("&$orderBy=" + column.key);
        }
        else if (column.key === appContext.appContext.sortArgs) {
            appContext.appContext.sortArgs = ("&$orderBy=" + column.key + " desc");
        }
        else {
            appContext.appContext.sortArgs = ("");
        }

        console.log(appContext.appContext.sortArgs);
    }

    function onRenderLink(item: any, index: any, column: any) {
        return <a href="" />
    }
}
