import React from "react";
import { loginRequest } from "../authConfig";
import { useMsal, useMsalAuthentication } from "@azure/msal-react/";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import { RequestSites } from "./RequestSites";
import * as msTeams from '@microsoft/teams-js';
import { useEffect } from "react";

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = () => {
    const appContext = useContext(AppContext).appContext;
    const { login, result, error } = useMsalAuthentication(InteractionType.Silent);

    useEffect(() => {
        if (error instanceof InteractionRequiredAuthError) {
            login(InteractionType.Popup, loginRequest);
        };

        if (result) {
            appContext.userAccessToken = result.accessToken
            RequestSites(appContext)
        }
    }, [error, result]);

    if (appContext.userAccessToken === "" && result) {
        appContext.userAccessToken = result.accessToken;
        RequestSites(appContext);
    }

    // if (appContext.userAccessToken === "") {
    //     instance
    //     .acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0],
    //     })
    //     .then(authResult => {
    //         appContext.userAccessToken = authResult.accessToken;
    //         RequestSites(appContext);
    //     });
    // }

    return (
        <>
        </>
    )
}