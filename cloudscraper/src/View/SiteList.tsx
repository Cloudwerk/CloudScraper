import { ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { AppServices } from '../Model/AppServices';
import { ISitesArrayInterface } from '../Model/Interfaces/ISitesArrayInterface';

export interface IRenderSitesListProps {
    appServices: AppServices,
}
export function RenderSitesList(props: IRenderSitesListProps) {
    let _columns: IColumn[];

    // const [time, setTime] = useState(Date.now());
    // useEffect(() => {
    //     const interval = setInterval(() => setTime(Date.now()), 1000);
    //     return () => {
    //         clearInterval(interval)
    //     };
    // })

    // this.state = {
    //     items: props.appServices.sitesList
    // }

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
                items={props.appServices.sitesList}
                columns={_columns}
                selectionMode={SelectionMode.none}
                layoutMode={DetailsListLayoutMode.fixedColumns}
                constrainMode={ConstrainMode.unconstrained}
                />
            </>
        )

}
