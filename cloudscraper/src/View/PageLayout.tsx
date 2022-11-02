import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = (props: any) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            { isAuthenticated ? <SignOutButton /> : <SignInButton />}

            {props.children}
        </>
    );
};