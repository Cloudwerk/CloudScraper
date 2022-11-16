import { DefaultButton, IconButton, IStackTokens, Stack, StackItem } from "@fluentui/react"
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";

export const PagingButtons = () => {
    const appContext = useContext(AppContext);
    
    const stackTokens: IStackTokens = { 
        padding: `${"40"}px ${""}px ${""}px ${""}px`
    }

    return (
        <Stack horizontal={true} horizontalAlign="space-evenly" tokens={stackTokens}>
            <StackItem align="center">
                <DefaultButton
                text="Previous Page"
                onClick={() => {
                    console.log("Previous Page");
                }}
                />
            </StackItem>
            <StackItem>
                <DefaultButton
                text="Next Page"
                onClick={() => {
                    console.log("Next Page");
                 } }
                /> 
            </StackItem>

        </Stack>
    )

}