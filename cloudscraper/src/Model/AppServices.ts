import { graphConfig } from "./authConfig"
import { ISitesArrayInterface } from "./Interfaces/ISitesArrayInterface";

export class AppServices {
 public userAccessToken: string = "";
 public sitesList: ISitesArrayInterface[] = []

    public async RequestSites(): Promise<void | ISitesArrayInterface[]> {
        const headers = new Headers();
        const bearer = `Bearer ${this.userAccessToken}`;

        headers.append("Authorization", bearer);

        const options = {
            method: "GET",
            headers: headers,
        };

        var graphValues: any[] = []
        await fetch(graphConfig.graphEndPoint, options)
            .then(response => response.json()
            .then((response: any) => {
                graphValues = response.value
            }))

        // console.log("graphValues:::")
        // console.log(graphValues)

        
        this.sitesList = []
        let counter = 1;
        graphValues.map((siteData) => {
            this.sitesList.push({
                key: (counter++) + "-idx",
                SiteName: siteData.displayName,
                Url: siteData.webUrl,
                SiteOwner: "",
                Description: siteData.Description,
                DateModified: siteData.lastModifiedDateTime,
                DateCreated: siteData.createdDateTime
            })
        })

        console.log(this.sitesList);
        return this.sitesList
    }

    
}
