import { graphConfig } from "../authConfig";
import { AppServices } from "./AppServices";
import { ISitesArray } from "./Interfaces/ISitesArray";

export async function RequestSites(app: AppServices) {
    const headers = new Headers();
    const bearer = `Bearer ${app.userAccessToken}`;
    const amountSites: number = 30;

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
            app.nextLink = response["@odata.nextLink"];
        }));

    graphValues.map((siteData) => {
            sitesList.push({
                SiteName: siteData.displayName,
                Url: siteData.webUrl,
                SiteOwner: "",
                Description: siteData.description,
                DateModified: siteData.lastModifiedDateTime,
                DateCreated: siteData.createdDateTime
            })
    })

        app.sitesList.set(sitesList);
        console.log(app.nextLink);
}