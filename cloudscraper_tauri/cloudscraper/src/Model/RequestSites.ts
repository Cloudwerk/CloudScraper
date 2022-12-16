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

    console.log(graphConfig.graphEndPoint + appServices.searchArgs + appServices.sortArgs + "&$top=" + `${appServices.amountSites * appServices.loadCounter}`)
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
export async function RequestMoreSites(appServices: AppServices) {
    appServices.loadCounter++;

    const headers = new Headers();
    const bearer = `Bearer ${appServices.userAccessToken}`;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    let sitesList: ISitesArray[] = [...appServices.sitesList.get()];
    let graphValues: any[] = [];

    console.log(graphConfig.graphEndPoint + appServices.searchArgs + appServices.sortArgs + "&$top=" + `${appServices.amountSites * appServices.loadCounter}`)
    await fetch(appServices.nextLink, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                appServices.nextLink = response["@odata.nextLink"];
            } else {
                appServices.nextLink = "";
            }
        }));

    decodeJSON(graphValues).forEach((site) => {
        sitesList.push(site);
    })

    appServices.sitesList.set(sitesList);
    console.log("nextLink: " + appServices.nextLink);
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