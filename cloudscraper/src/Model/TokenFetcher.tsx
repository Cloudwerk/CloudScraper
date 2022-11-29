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

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = () => {
    const appContext = useContext(AppContext).appContext;
    const [{ inTeams }] = useTeams();
    const { login, result, error } = useMsalAuthentication(InteractionType.Silent);

    useEffect(() => {
        if (inTeams === true) {
            msTeams.app.initialize();
            let authTokenRequest = {
                claims: loginRequest.scopes,
                silent: false
            };

            let accessToken = msTeams.authentication.getAuthToken(authTokenRequest);
            console.log("accessToken values: " + accessToken);
            appContext.userAccessToken = accessToken.toString();
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