import { AuthenticationResult } from "@azure/msal-browser";
import { graphConfig } from "./authConfig"
import { ISitesArrayInterface } from "./Interfaces/ISitesArrayInterface";

export class AppServices {
 public userAccessToken: string = "";

    public RequestSites() {
        const headers = new Headers();
        const bearer = `Bearer ${this.userAccessToken}`;

        headers.append("Authorization", bearer);

        console.log(headers);

        const options = {
            method: "GET",
            headers: headers,
        };

        return fetch(graphConfig.graphEndPoint, options)
            .then(response => response.json()
            .then((json: JSON) => DecodeJson(json)
            ))
            .catch(error => console.log(error))

            function DecodeJson(response: any) {
                const values = response.value
                const sites: ISitesArrayInterface[] = [];

                values.forEach((site: any) => sites.push({
                    SiteName: site.displayName,
                    Url: site.webUrl,
                    SiteOwner: "",
                    DateModified: site.lastModifiedDateTime,
                    DateCreated: site.createdDateTime
                }))

                console.log(sites);
            }

            // function asdf(response: any) {
            //     const hits: any[] = response.value.hitsContainers[0].hits;
            //     const sites: ISitesArrayInterface[] = [];

            //     hits.map((hitItem) => {
            //         sites.push({
            //                 SiteName: hitItem.resource.displayName,
            //                 Url: hitItem.resource.webUrl,
            //                 SiteOwner: "",
            //                 DateModified: hitItem.resource.lastModifiedDateTime,
            //                 DateCreated: hitItem.resource.createdDateTime
            //         }); 
            //     });

                


        }
    };
