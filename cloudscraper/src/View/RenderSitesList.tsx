import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, Link, SelectionMode } from '@fluentui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Model/Context/AppContext';
import { IRenderSitesListProps } from '../Model/Interfaces/IRenderSitesListProps';

export const RenderSitesList = (props: IRenderSitesListProps) => {
    let _columns: IColumn[];
    let prevColumn: IColumn;
    const appContext = useContext(AppContext)



    _columns = [
        { key: 'name', name: 'Name', fieldName: 'SiteName', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort, isSorted: false, isSortedDescending: false,},
        { key: 'webUrl', name: 'URL', fieldName: 'Url', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort, onRender: onRenderLink, isSorted: false, isSortedDescending: false}, // Add sorting properties
        { key: '', name: 'Owner', fieldName: 'SiteOwner', minWidth: 150, maxWidth: 200, isResizable: true, onColumnClick: Sort},
        { key: 'Description', name: 'Description', fieldName: 'Description', minWidth: 150, maxWidth: 350, isResizable: true, onColumnClick: Sort, isSorted: false, isSortedDescending: false},
        { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort, isSorted: false, isSortedDescending: false},
        { key: 'createdDateTime', name: 'Date Created', fieldName: 'DateCreated', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort, isSorted: false, isSortedDescending: false}
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
        if (prevColumn !== column) {
            prevColumn.isSorted = false;
            prevColumn.isSortedDescending = false;
            prevColumn = column;
        }

        if (column.isSorted === false && column.isSortedDescending === false) {
            column.isSorted = true;
            appContext.appContext.sortArgs = ("&$orderBy=" + column.key);
        }
        else if (column.isSorted === true) {
            column.isSorted = false;
            column.isSortedDescending = true;
            appContext.appContext.sortArgs = ("&$orderBy=" + column.key + " desc");
        }
        else if (column.isSortedDescending === true) {
            column.isSortedDescending = false;
            appContext.appContext.sortArgs = ("");
        }

        console.log(appContext.appContext.sortArgs);
    }

    function onRenderLink(item: any, index: any, column: any) {
        const fieldContent = item[column.fieldName];
        return <Link href={fieldContent} target="_blank">{fieldContent}</Link>
    }
}
