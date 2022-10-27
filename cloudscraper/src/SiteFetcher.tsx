import React from "react";
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

export interface ISitesData {
    title: string;
    url: string;
    siteOwner: String;
    description: string;
    lastEdited: string;
    dateCreated: string;
}

// Cant be properly tested as of right now
export class SiteFetcher extends React.Component<any, any> {
    private spHttpClient: SPHttpClient;
    private _sitesData: ISitesData[];

    constructor(props: any, spHttpclient: SPHttpClient) {
        super(props);

        this.spHttpClient = spHttpclient
        this._sitesData = [];
    };

    private _getSites(): Promise<any> {
        return this.spHttpClient.get("https://microsoft.com/v1.0/search/query?", SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => {
                return response.json();
            })
    };

    private _decodeSitesDataAsync(): void {
        if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
            this._getSites()
                .then((response) => {
                    this._decodeSitesData(response.value)
                })
        }
    }

    private _decodeSitesData(items: any[]): void {
        items.forEach((item: any) => {
            this._sitesData.push(
                item.Title,
                item.Id,
                item.Author,
                item.Description,
                item.LastItemModifiedDate,
                item.Created
            )
        }
    )}
}