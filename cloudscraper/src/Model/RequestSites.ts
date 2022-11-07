import { graphConfig } from "../authConfig";
import { ISitesArray } from "./Interfaces/ISitesArray";

export async function RequestSites(setSitesList: Function, userAccessToken: string, searchArgs?: string) {
    console.log(userAccessToken);
    console.log(setSitesList);
    const headers = new Headers();
    const bearer = `Bearer ${userAccessToken}`;

        headers.append("Authorization", bearer);

        const options = {
            method: "GET",
            headers: headers,
        };

        var sitesList: ISitesArray[] = [];
        var graphValues: any[] = [];
        await fetch(graphConfig.graphEndPoint + searchArgs, options)
            .then(response => response.json()
            .then((response: any) => {
                graphValues = response.value
                console.log(graphValues);
            }));

        graphValues.map((siteData) => {
                sitesList.push({
                    // key: (counter++) + "-idx",
                    SiteName: siteData.displayName,
                    Url: siteData.webUrl,
                    SiteOwner: "",
                    Description: siteData.Description,
                    DateModified: siteData.lastModifiedDateTime,
                    DateCreated: siteData.createdDateTime
                })
        })

        setSitesList(sitesList);
}