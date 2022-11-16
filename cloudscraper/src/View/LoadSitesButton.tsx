import { PrimaryButton } from "@fluentui/react";
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestSites } from "../Model/RequestSites";

export const LoadSitesButton = () => {
    const appContext = useContext(AppContext);

    const LoadSites = async (): Promise<void> => {
        await RequestSites(appContext.appContext)
    }

    return (
        <PrimaryButton
            label="RequestSitesBtn"
            text="Load Sites"
            onClick={LoadSites}
        />
    )
}