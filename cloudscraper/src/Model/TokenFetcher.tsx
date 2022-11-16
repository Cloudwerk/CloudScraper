import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react";
import { AppContext } from "./Context/AppContext";
import { useContext, useState } from "react";
import { RequestSites } from "./RequestSites";

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = () => {
    const { instance, accounts } = useMsal();
    const appContext = useContext(AppContext);
    const [tokenFetched, setTokenFetched] = useState<Boolean>(false);

    if (!tokenFetched) {
        instance
        .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
        .then(authResult => {
            appContext.appContext.userAccessToken = authResult.accessToken;
            RequestSites(appContext.appContext);
            setTokenFetched(true);
        });
    }

    return (
        <>
        </>
    )
}