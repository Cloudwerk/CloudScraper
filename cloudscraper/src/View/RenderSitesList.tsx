import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Model/Context/AppContext';
import { IRenderSitesListProps } from '../Model/Interfaces/IRenderSitesListProps';

export const RenderSitesList = (props: IRenderSitesListProps) => {
    let _columns: IColumn[];
    const appContext = useContext(AppContext)
    
    useEffect(() => {
        console.log("re-render list");
    }, [])

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
                items={appContext.appContext.sitesList.get()}
                columns={_columns}
                selectionMode={SelectionMode.none}
                layoutMode={DetailsListLayoutMode.fixedColumns}
                constrainMode={ConstrainMode.unconstrained}
                />
            </>
        )
        
    function Sort(ev: React.MouseEvent<HTMLElement>, column: IColumn): void {
        if (column.fieldName !== appContext.appContext.sortArgs) {
            appContext.appContext.sortArgs = ("&$orderBy=" + column.key);
        }
        else if (column.fieldName === appContext.appContext.sortArgs) {
            appContext.appContext.sortArgs =("&$orderBy=" + column.key + " desc");
        }
        else {
            appContext.appContext.sortArgs = ("");
        }
    }
}
