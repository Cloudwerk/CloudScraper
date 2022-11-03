import { PrimaryButton } from "@fluentui/react";
import { IRequestSitesButton } from "../Model/Interfaces/IRequestSitesButton";

export function RequestSitesButton(props: IRequestSitesButton) {
    let onClickFunc = (): void => {
        props.appServices.RequestSites()
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