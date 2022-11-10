import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react';
import { IRenderSitesList } from '../Model/Interfaces/IRenderSitesList';

export function RenderSitesList(props: IRenderSitesList) {
    let _columns: IColumn[];

        _columns = [
            { key: 'displayName', name: 'Name', fieldName: 'SiteName', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort},
            { key: 'webUrl', name: 'URL', fieldName: 'Url', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort},
            { key: '', name: 'Owner', fieldName: 'SiteOwner', minWidth: 150, maxWidth: 200, isResizable: true, onColumnClick: Sort},
            { key: 'Description', name: 'Description', fieldName: 'Description', minWidth: 150, maxWidth: 350, isResizable: true, onColumnClick: Sort},
            { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 100, maxWidth: 300, isResizable: true, onColumnClick: Sort},
            { key: 'createdDateTime', name: 'Date Created', fieldName: 'DateCreated', minWidth: 100, maxWidth: 350, isResizable: true, onColumnClick: Sort}
            ];

        return (
            <>
                <DetailsList
                setKey={"key"}
                items={props.sitesArray}
                columns={_columns}
                selectionMode={SelectionMode.none}
                layoutMode={DetailsListLayoutMode.fixedColumns}
                constrainMode={ConstrainMode.unconstrained}
                />
            </>
        )
        
    function Sort(ev: React.MouseEvent<HTMLElement>, column: IColumn): void {
        if (column.fieldName != props.sortArg) {
            props.setSortarg("&$orderBy=" + column.key);
        }
        else if (column.fieldName == props.sortArg) {
            props.setSortarg("&$orderBy=" + column.key + " desc");
        }
        else {
            props.setSortarg("");
        }
    }
}
