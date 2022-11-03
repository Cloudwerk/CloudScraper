import { graphConfig } from "./authConfig"
import { ISitesArrayInterface } from "./Interfaces/ISitesArrayInterface";

export class AppServices {
 public userAccessToken: string = "";
 public sitesList: ISitesArrayInterface[] = []

    public RequestSites() {
        const headers = new Headers();
        const bearer = `Bearer ${this.userAccessToken}`;

        headers.append("Authorization", bearer);

        const options = {
            method: "GET",
            headers: headers,
        };

        return fetch(graphConfig.graphEndPoint, options)
            .then(response => response.json()
            .then((response: JSON) => DecodeJson(response, this.sitesList)
            ))
            .catch(error => console.log(error))

            function DecodeJson(response: any, sitesList: ISitesArrayInterface[]) {
                const values = response.value
                sitesList = [];

                values.forEach((site: any) => sitesList.push({
                    SiteName: site.displayName,
                    Url: site.webUrl,
                    SiteOwner: "",
                    Description: site.Description,
                    DateModified: site.lastModifiedDateTime,
                    DateCreated: site.createdDateTime
                }))

                console.log("AppServices siteList: ");
                console.log(sitesList)
            }
        }
    };
