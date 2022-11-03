import { DetailsList, IColumn, SelectionMode } from '@fluentui/react';
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
                setKey={"key"}
                items={props.appServices.sitesList}
                columns={_columns}
                selectionMode={SelectionMode.none}
                />
                <div>
                    {props.appServices.sitesList.length}
                </div>
            </>
        )

}
