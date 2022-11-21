import { graphConfig } from "../authConfig";
import { AppServices } from "./AppServices";
import { AppContext } from "./Context/AppContext";
import { ISitesArray } from "./Interfaces/ISitesArray";

// Used for normal search + sorting
export async function RequestSites(app: AppServices, keepCount?: boolean) {
    const headers = new Headers();
    const bearer = `Bearer ${app.userAccessToken}`;
    const amountSites: number = 5;

    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers,
    };

    if (keepCount !== true) {
        app.loadCounter = 1;
    }

    var sitesList: ISitesArray[] = [];
    var graphValues: any[] = [];

    await fetch(graphConfig.graphEndPoint + app.searchArgs + app.sortArgs + "&$top=" + `${amountSites * app.loadCounter}`, options)
        .then(response => response.json()
        .then((response: any) => {
            graphValues = response.value;
            if (response["@odata.nextLink"]) {
                app.nextLink = response["@odata.nextLink"];
            } else {
                app.nextLink = "";
            }
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

    var sitesList: ISitesArray[] = [...app.sitesList.get()];
    var graphValues: any[] = [];

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