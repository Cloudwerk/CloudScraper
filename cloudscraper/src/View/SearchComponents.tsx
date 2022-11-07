import { PrimaryButton, TextField } from "@fluentui/react";
import React from "react";
import { ISearchComponents } from "../Model/Interfaces/ISearchComponents";


export class SearchComponents extends React.Component<ISearchComponents> {
    private searchArgs: string = "";

    constructor(props: ISearchComponents) {
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
        console.log(this.props.userAccessToken);
            await this.props.RequestSitesFunc(this.props.setSitesListFunc, this.props.userAccessToken, this.searchArgs);
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