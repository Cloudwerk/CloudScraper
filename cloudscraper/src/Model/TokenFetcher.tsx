import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react";

export interface ITokenFetcherProps {
    setToken: Function
}

export const TokenFetcher = (props: ITokenFetcherProps) => {
    const { instance, accounts } = useMsal();

    instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then(authResult => {
                props.setToken(authResult.accessToken)
            });
    

    return (
        <>
        </>
    )
}