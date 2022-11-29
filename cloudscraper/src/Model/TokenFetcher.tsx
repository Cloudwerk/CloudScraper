import React from "react";
import { loginRequest } from "../authConfig";
import { useMsalAuthentication } from "@azure/msal-react/";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import { RequestSites } from "./RequestSites";
import * as msTeams from '@microsoft/teams-js';
import { useTeams } from "msteams-react-base-component";
import { useEffect } from "react";

export const TokenFetcher = () => {
    const appContext = useContext(AppContext).appContext;
    const [{ inTeams }] = useTeams();
    const { login, result, error } = useMsalAuthentication(InteractionType.Silent);

    useEffect(() => {
        if (inTeams === true) {
            msTeams.app.initialize();
            let authTokenRequest = {
                resources: ["api://cloudscraper-fa5aa203-252e-40d0-be4d-3ac69c015e83"],
                claims: loginRequest.scopes,
                silent: false
            };

            let accessToken = msTeams.authentication.getAuthToken(authTokenRequest);
            console.log("accessToken values: " + accessToken);
            appContext.userAccessToken = accessToken.toString();
            console.log("in Teams!");
        }
        else {
            console.log("Not in Teams");
        }

        if (error instanceof InteractionRequiredAuthError) {
            login(InteractionType.Popup, loginRequest);
        };

        if (result) {
            appContext.userAccessToken = result.accessToken
            RequestSites(appContext)
        }
    }, [error, result, inTeams]);

    return (
        <>
        </>
    )
}