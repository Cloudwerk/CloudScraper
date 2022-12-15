import { StackItem, Stack, DefaultButton } from "@fluentui/react";
import { IStackTokens } from "@fluentui/react/lib/components/Stack/Stack.types";
import * as React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { getMoreSites } from "../Model/getSites";

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
                    getMoreSites(appContext)
                        .then(() => {
                            Promise.resolve();
                        })
                }}
                />
            </StackItem>
        </Stack>
    )

}