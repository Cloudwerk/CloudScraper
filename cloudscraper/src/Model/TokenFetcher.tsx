import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react/";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import { RequestSites } from "./RequestSites";

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = () => {
    const { instance, accounts } = useMsal();
    const appContext = useContext(AppContext).appContext;

    if (appContext.userAccessToken === "") {
        instance
        .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
        .then(authResult => {
            appContext.userAccessToken = authResult.accessToken;
            RequestSites(appContext);
        });
    }

    return (
        <>
        </>
    )
}