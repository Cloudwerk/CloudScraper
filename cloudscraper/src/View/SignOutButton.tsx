import { useMsal } from "@azure/msal-react";
import { PrimaryButton } from "@fluentui/react";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType: any) => {
        if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }

    return (
        <PrimaryButton 
            label="SignOutButton"
            text="Sign Out"
            onClick={() => handleLogout("redirect")}
        />
    );
}