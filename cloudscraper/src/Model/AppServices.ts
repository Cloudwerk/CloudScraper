import { AuthenticationResult } from "@azure/msal-browser";
import { graphConfig } from "./authConfig"
import { ISitesArrayInterface } from "./Interfaces/ISitesArrayInterface";

export class AppServices {
    private userAccessToken: AuthenticationResult;

    constructor(accessToken: string) {
        this.userAccessToken = accessToken;
    }

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
            .then((json: JSON) => asdf(json)
            ))
            .catch(error => console.log(error))

            function asdf(response: any) {
                const hits: any[] = response.value.hitsContainers[0].hits;
                const sites: ISitesArrayInterface[] = [];

                hits.map((hitItem) => {
                    sites.push({
                            SiteName: hitItem.resource.displayName,
                            Url: hitItem.resource.webUrl,
                            SiteOwner: "",
                            DateModified: hitItem.resource.lastModifiedDateTime,
                            DateCreated: hitItem.resource.createdDateTime
                    }); 
                });

                console.log(sites)


        }
    };
}