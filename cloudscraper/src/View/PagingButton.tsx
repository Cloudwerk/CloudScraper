import { DefaultButton, IStackTokens, Stack, StackItem } from "@fluentui/react"
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";
import { RequestMoreSites } from "../Model/RequestSites";

export const PagingButton = () => {
    const appContext = useContext(AppContext).appContext;
    
    const stackTokens: IStackTokens = { 
        padding: `${"40"}px ${""}px ${""}px ${""}px`
    }

    return (
        <Stack horizontal={true} horizontalAlign="center" tokens={stackTokens}>
            <StackItem align="center">
                <DefaultButton
                text="Load more sites"
                onClick={() => {
                    RequestMoreSites(appContext)
                }}
                />
            </StackItem>
        </Stack>
    )

}