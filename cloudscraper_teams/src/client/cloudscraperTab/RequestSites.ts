import { Context, HttpRequest } from "@azure/functions";
import { Client, ResponseType } from "@microsoft/microsoft-graph-client";
import { createMicrosoftGraphClient, IdentityType, TeamsFx } from "@microsoft/teamsfx";
import { ISitesArray } from "./Interfaces/ISitesArray";

type TeamsfxContext = { [key: string]: any };

export async function RequestSites(context: Context, req: HttpRequest, teamsfxContext: TeamsfxContext): Promise<void> {
    const connectionId = req.query.connectionId;

    let teamsfx: TeamsFx = new TeamsFx(IdentityType.App);

    const graphClient: Client = createMicrosoftGraphClient(teamsfx);
    let graphResponse: any = 
        await graphClient.api("/sites/")
            .get();

    console.log(graphResponse);
}