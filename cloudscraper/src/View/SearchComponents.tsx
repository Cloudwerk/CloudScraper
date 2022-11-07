import { PrimaryButton, TextField } from "@fluentui/react";
import React from "react";
import { IRequestSitesButton } from "../Model/Interfaces/IRequestSitesButton";


export class SearchComponents extends React.Component<IRequestSitesButton> {
    private searchArgs: string = "";

    constructor(props: IRequestSitesButton) {
        super(props);
    }

    private SearchbarFunc = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        if (text) {
            this.searchArgs = text as string;
            console.log(this.searchArgs);
        }
        else {
            this.searchArgs = "";
            console.log("No text")
        }
    }

    private ButtonFunc = async (): Promise<void> => {
        console.log(this.searchArgs);
            await this.props.appServices.RequestSites(this.searchArgs);
            this.props.updateCallback();
        };

    public render(): JSX.Element {
        return (
            <>
                <TextField
                    placeholder="Search for a site..."
                    onChange={this.SearchbarFunc}
                />

                <PrimaryButton
                label="RequestSitesBtn"
                text="Load Sites"
                onClick={this.ButtonFunc}
            />
            </>
        )
    }
}