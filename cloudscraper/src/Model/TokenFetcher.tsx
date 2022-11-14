import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = () => {
    const { instance, accounts } = useMsal();
    const appContext = useContext(AppContext);

    if (appContext.appContext.userAccessToken === "") {
        instance
        .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
        .then(authResult => {
            appContext.appContext.userAccessToken = authResult.accessToken;
        });
    }

    return (
        <>
        </>
    )
}