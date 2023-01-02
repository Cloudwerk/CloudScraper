import { AppServices } from "./AppServices";
import { MSGraphClientV3 } from '@microsoft/sp-http' 
import { ISitesArray } from "../Interfaces/ISitesArray";


export async function getSites(appServices: AppServices, keepCount?: boolean): Promise<void> {
    const sitesList: ISitesArray[] = [];
    let graphValues: any[] = [];

    if (keepCount !== true) {
        appServices.loadCounter = 1;
    }

    await appServices.context.msGraphClientFactory
        .getClient('3')
        .then((client: MSGraphClientV3): void => {
            client 
                .api('/sites?search=' + appServices.searchArgs + appServices.sortArgs + '&$top=' + (appServices.amountSites * appServices.loadCounter))
                .get((error: any, response: any, rawResponse?: any) => {
                    console.log("Error:", error);
                    console.log("Response:", response);
                    console.log("rawResponse:", rawResponse);

                    graphValues = response.value;

                    if (response["@odata.nextLink"]) {
                        appServices.nextLink = response["@odata.nextLink"];
                    } else {
                        appServices.nextLink = "";
                    }
                }).then(() => {
                    decodeJSON(graphValues).forEach((site) => {
                        sitesList.push(site);
                    });

                    appServices.sitesList.set(sitesList);
                    appServices.initialized = true;
                    console.log(appServices.sitesList.get());
                }
                )
        });
    Promise.resolve();
}

export async function getMoreSites(appServices: AppServices, keepCount?: boolean) {
    appServices.loadCounter++;
    const sitesList: ISitesArray[] = [...appServices.sitesList.get()];
    let graphValues: any[] = [];

    await appServices.context.msGraphClientFactory
        .getClient('3')
        .then((client: MSGraphClientV3): void => {
            client 
                .api(appServices.nextLink)
                .get((error: any, response: any, rawResponse?: any) => {
                    console.log("Error:", error);
                    console.log("Response:", response);
                    console.log("rawResponse:", rawResponse);

                    graphValues = response.value;

                    if (response["@odata.nextLink"]) {
                        appServices.nextLink = response["@odata.nextLink"];
                    } else {
                        appServices.nextLink = "";
                    }
                }).then(() => {
                    decodeJSON(graphValues).forEach((site) => {
                        sitesList.push(site);
                    });

                    appServices.sitesList.set(sitesList);
                    console.log(appServices.sitesList.get());

                    Promise.resolve();
                }
                )
        });
}


export function decodeJSON(graphValues: any[]): ISitesArray[] {
    const decodedArray: ISitesArray[] = [];

    graphValues.map((siteData) => {
        decodedArray.push({
            SiteName: siteData.displayName,
            Url: siteData.webUrl,
            Description: siteData.description,
            DateModified: new Date(siteData.lastModifiedDateTime).toLocaleString(),
            DateCreated: new Date(siteData.createdDateTime).toLocaleString()
        });
    });

    return decodedArray;
}