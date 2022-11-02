import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";
import { AppServices } from "./AppServices";

export interface ITokenFetcherProps {
    myApp: AppServices
}

export const TokenFetcher = (props: ITokenFetcherProps) => {
    const { instance, accounts } = useMsal();

    instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then(authResult => {
                    props.myApp.userAccessToken = authResult.accessToken
                    console.log(authResult.accessToken);
            });
    

    return (
        <>
        </>
    )
}