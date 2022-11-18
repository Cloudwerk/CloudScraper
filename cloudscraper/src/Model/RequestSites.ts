import { graphConfig } from "../authConfig";
import { AppServices } from "./AppServices";
import { AppContext } from "./Context/AppContext";
import { ISitesArray } from "./Interfaces/ISitesArray";

export async function RequestSites(app: AppServices) {
    const headers = new Headers();
    const bearer = `Bearer ${app.userAccessToken}`;
    const amountSites: number = 3;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    var sitesList: ISitesArray[] = [];
    var graphValues: any[] = [];

    await fetch(graphConfig.graphEndPoint + app.searchArgs + app.sortArgs + "&$top=" + `${amountSites}`, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                app.nextLink = response["@odata.nextLink"];
            };
        }));

    graphValues.map((siteData) => {
            sitesList.push({
                SiteName: siteData.displayName,
                Url: siteData.webUrl,
                SiteOwner: "",
                Description: siteData.description,
                DateModified: new Date(siteData.lastModifiedDateTime).toLocaleString(),
                DateCreated: new Date(siteData.createdDateTime).toLocaleString()
            })
    })

        app.sitesList.set(sitesList);
        console.log("nextLink: " + app.nextLink);
}

export async function RequestMoreSites(app: AppServices) {
    const headers = new Headers();
    const bearer = `Bearer ${app.userAccessToken}`;
    const amountSites: number = 3;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    var sitesList: ISitesArray[] = [...app.sitesList.get()];
    var graphValues: any[] = [];

    await fetch(app.nextLink, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                app.nextLink = response["@odata.nextLink"];
            };
        }));

    graphValues.map((siteData) => {
            sitesList.push({
                SiteName: siteData.displayName,
                Url: siteData.webUrl,
                SiteOwner: "",
                Description: siteData.description,
                DateModified: new Date(siteData.lastModifiedDateTime).toLocaleString(),
                DateCreated: new Date(siteData.createdDateTime).toLocaleString()
            })
    })
        app.sitesList.set(sitesList);
        console.log("nextLink: " + app.nextLink);
}