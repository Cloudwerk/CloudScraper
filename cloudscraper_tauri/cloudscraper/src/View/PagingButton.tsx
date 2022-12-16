import { StackItem, Stack, DefaultButton } from "@fluentui/react";
import { IStackTokens } from "@fluentui/react/lib/components/Stack/Stack.types";
import React from "react";
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
                text="Load More Sites"
                onClick={() => {
                    RequestMoreSites(appContext)
                }}
                />
            </StackItem>
        </Stack>
    )

}