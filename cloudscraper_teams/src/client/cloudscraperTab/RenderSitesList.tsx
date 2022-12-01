import * as React from 'react';
import { DetailsList, IColumn } from '@fluentui/react'

export const RenderSitesList = () => {
    let columns: IColumn[];

    columns = [
        { key: 'name', name: 'Name', fieldName: 'SiteName', minWidth: 200, maxWidth: 300, isResizable: true, },
        { key: 'webUrl', name: 'URL', fieldName: 'Url', minWidth: 200, maxWidth: 400, isResizable: true},
        { key: '', name: 'Owner', fieldName: 'SiteOwner', minWidth: 100, maxWidth: 250, isResizable: true, },
        { key: 'description', name: 'Description', fieldName: 'Description', minWidth: 300, maxWidth: 350, isResizable: true, },
        { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true},
        { key: 'createdDateTime', name: 'Date Created', fieldName: 'DateCreated', minWidth: 150, maxWidth: 200, isResizable: true},
    ]

    return (
        <>
            <DetailsList
                items = {[]}
                columns = {columns}
            />
        </>
    )
}