import { DefaultButton, IconButton } from "@fluentui/react"
import { useContext } from "react";
import { AppContext } from "../Model/Context/AppContext";

export const PagingButtons = () => {
    const appContext = useContext(AppContext);
    
    return (
        <div>
            <DefaultButton
            text="Previous Page"
            onClick={() => { } }

            />

            <DefaultButton
            text="Next Page"
            onClick={() => { } }
            />
        </div>
    )

}