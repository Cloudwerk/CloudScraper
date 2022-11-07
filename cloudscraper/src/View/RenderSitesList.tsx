import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react';
import { IRenderSitesList } from '../Model/Interfaces/IRenderSitesList';

export function RenderSitesList(props: IRenderSitesList) {
    let _columns: IColumn[];

        _columns = [
            { key: 'column1', name: 'Name', fieldName: 'SiteName', minWidth: 100, maxWidth: 300, isResizable: true,},
            { key: 'column2', name: 'URL', fieldName: 'Url', minWidth: 100, maxWidth: 350, isResizable: true},
            { key: 'column3', name: 'Owner', fieldName: 'SiteOwner', minWidth: 150, maxWidth: 200, isResizable: true},
            { key: 'column4', name: 'Description', fieldName: 'Description', minWidth: 150, maxWidth: 350, isResizable: true},
            { key: 'column5', name: 'Date Modified', fieldName: 'DateModified', minWidth: 100, maxWidth: 300, isResizable: true},
            { key: 'column6', name: 'Date Created', fieldName: 'DateCreated', minWidth: 100, maxWidth: 350, isResizable: true}
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

}
