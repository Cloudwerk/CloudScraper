// import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, Link, SelectionMode } from '@fluentui/react';
import * as React from 'react';
import { IColumn } from '@fluentui/react/lib/components/DetailsList/DetailsList.types';
import { DetailsList, SelectionMode, DetailsListLayoutMode, ConstrainMode, Link, } from '@fluentui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { IRenderSitesListProps } from '../Interfaces/IRenderSitesListProps';
import { getSites } from '../Model/getSites';

export const SitesList = (props: IRenderSitesListProps) => {
    let _columns: IColumn[];
    const appContext = useContext(AppContext).appContext;

    _columns = [
        { key: 'name', name: 'Name', fieldName: 'SiteName', minWidth: 200, maxWidth: 300, isResizable: true, },
        { key: 'webUrl', name: 'URL', fieldName: 'Url', minWidth: 200, maxWidth: 400, isResizable: true, onRender: onRenderLink},
        { key: 'description', name: 'Description', fieldName: 'Description', minWidth: 300, maxWidth: 350, isResizable: true, },
        { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, onColumnClick: Sort, isSorted: appContext.getSorted('lastModifiedDateTime'), isSortedDescending: appContext.getSortedDesc('lastModifiedDateTime')},
        { key: 'createdDateTime', name: 'Date Created', fieldName: 'DateCreated', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, onColumnClick: Sort, isSorted: appContext.getSorted('createdDateTime'), isSortedDescending: appContext.getSortedDesc('createdDateTime')}
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
        appContext.onSortChanged(column);
        getSites(appContext, true);
    }

    function onRenderLink(item: any, index: any, column: any) {
        const fieldContent = item[column.fieldName];
        return <Link href={fieldContent} target="_blank">{fieldContent}</Link>
    }
}
