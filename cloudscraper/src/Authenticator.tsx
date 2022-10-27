import { config } from "./Config";
import { PublicClientApplication } from '@azure/msal-browser';
import { PrimaryButton } from "@fluentui/react";
import React from "react";

export class Authenticator extends React.Component {
    publicClientApplication: PublicClientApplication;
    constructor(props: any) {
        super(props);

        this.state = {
            error: null,
            isAuthenticated: false,
            user: {}
        };

        this.publicClientApplication = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                redirectUri: config.redirectUri,
                authority: config.authority
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: true
            }
        });
    }

    private async _Login() {
        try {
            await this.publicClientApplication.loginPopup({
                scopes: config.scopes,
                prompt: "select_account"
            });

            this.setState({
                isAuthenticated:true,
            })
            this.publicClientApplication.loginRedirect()
        }
        catch(err) {
            this.setState({
                isAuthenticated: false,
                user: {},
                error: err
            });
            console.log(err);
        }
    }

    private _Logout(): void {
        this.publicClientApplication.logoutPopup();
    }

    public render(): JSX.Element {
        return (
            <div>
                <PrimaryButton
                    onClick={() => this._Login()}
                    label="Log in"
                    text="Log in"
                     />
            </div>
        )
    }
}