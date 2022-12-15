import { AppServices } from "./AppServices";
import { MSGraphClientV3 } from '@microsoft/sp-http' 


export function getSites(appServices: AppServices, keepCount?: boolean) {
    appServices.context.msGraphClientFactory
        .getClient('3')
        .then((client: MSGraphClientV3): void => {
            client 
                .api("/me")
                .get((error: any, response: any) => {
                    console.log("Error:", error);
                    console.log("Response:", response);
                });
        });

    
}