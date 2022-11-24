import { graphConfig } from "../authConfig";
import { AppServices } from "./AppServices";
import { ISitesArray } from "./Interfaces/ISitesArray";


// Used for normal search + sorting
export async function RequestSites(appServices: AppServices, keepCount?: boolean) {
    const headers = new Headers();
    const bearer = `Bearer ${appServices.userAccessToken}`;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    if (keepCount !== true) {
        appServices.loadCounter = 1;
    }

    let sitesList: ISitesArray[] = [];
    let graphValues: any[] = [];

    await fetch(graphConfig.graphEndPoint + appServices.searchArgs + appServices.sortArgs + "&$top=" + `${appServices.amountSites * appServices.loadCounter}`, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                appServices.nextLink = response["@odata.nextLink"];
            } else {
                appServices.nextLink = "";
            }
        }));

    sitesList = decodeJSON(graphValues);

    appServices.sitesList.set(sitesList);
    console.log("nextLink: " + appServices.nextLink);
}


// Used for paging only, uses nextLink from AppServices
export async function RequestMoreSites(app: AppServices) {
    app.loadCounter++;

    const headers = new Headers();
    const bearer = `Bearer ${app.userAccessToken}`;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    let sitesList: ISitesArray[] = [...app.sitesList.get()];
    let graphValues: any[] = [];

    await fetch(app.nextLink, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                app.nextLink = response["@odata.nextLink"];
            } else {
                app.nextLink = "";
            }
        }));

    decodeJSON(graphValues).forEach((site) => {
        sitesList.push(site);
    })

    app.sitesList.set(sitesList);
    console.log("nextLink: " + app.nextLink);
}

export function decodeJSON(graphValues: any[]): ISitesArray[] {
    let sitesList: ISitesArray[] = [];

    graphValues.map((siteData) => {
        sitesList.push({
            SiteName: siteData.displayName,
            Url: siteData.webUrl,
            SiteOwner: "",
            Description: siteData.description,
            DateModified: new Date(siteData.lastModifiedDateTime).toLocaleString(),
            DateCreated: new Date(siteData.createdDateTime).toLocaleString()
        })
    });

    return sitesList;
}