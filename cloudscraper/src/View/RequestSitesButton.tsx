import { PrimaryButton } from "@fluentui/react";
import { IRequestSitesButton } from "../Model/Interfaces/IRequestSitesButton";

export function RequestSitesButton(props: IRequestSitesButton) {
    return (
        <>
            <PrimaryButton
                label="RequestSitesBtn"
                text="Request Sites"
            />
        </>
    )
}