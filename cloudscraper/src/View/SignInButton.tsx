import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { PrimaryButton } from "@fluentui/react";


export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: any) => {
        if (loginType == "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <PrimaryButton
            label="SignInButton"
            text="Sign In"
            onClick={() => handleLogin("redirect")}
        />
    )
}