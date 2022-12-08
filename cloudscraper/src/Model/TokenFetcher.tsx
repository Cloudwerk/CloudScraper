import React from "react";
import { loginRequest } from "../authConfig";
import { useMsalAuthentication, } from "@azure/msal-react/";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import { RequestSites } from "./RequestSites";
import { useEffect } from "react";

export const TokenFetcher = () => {
    const appContext = useContext(AppContext).appContext;
    const { login, result, error } = useMsalAuthentication(InteractionType.Silent);

    useEffect(() => {
        if (error instanceof InteractionRequiredAuthError) {
            login(InteractionType.Popup, loginRequest);
        };

        if (result) {
            appContext.userAccessToken = result.accessToken;
            console.log("accessToken:" + result.accessToken);
            RequestSites(appContext);
        }
    }, [error, result]);

    return (
        <>
        </>
    )
}