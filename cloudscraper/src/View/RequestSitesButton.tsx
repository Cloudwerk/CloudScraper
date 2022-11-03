import { PrimaryButton } from "@fluentui/react";
import { IRequestSitesButton } from "../Model/Interfaces/IRequestSitesButton";

export function RequestSitesButton(props: IRequestSitesButton) {
    let onClickFunc = async (): Promise<void> => {
        await props.appServices.RequestSites();
        props.updateCallback();
        console.log("done");
    }

    return (
        <>
            <PrimaryButton
                label="RequestSitesBtn"
                text="Request Sites"
                onClick={onClickFunc}
            />
        </>
    )
}