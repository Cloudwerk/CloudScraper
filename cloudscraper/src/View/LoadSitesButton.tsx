import { PrimaryButton } from "@fluentui/react";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestSites } from "../Model/RequestSites";

export const LoadSitesButton = () => {
    const appContext = useContext(AppContext);

    return (
        <PrimaryButton
            label="RequestSitesBtn"
            text="Load Sites"
            onClick={async (): Promise<void> => {
                await RequestSites(appContext.appContext);
            }}
        />
    )
}