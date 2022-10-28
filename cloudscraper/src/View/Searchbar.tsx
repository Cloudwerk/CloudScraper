import { TextField } from '@fluentui/react'
import React from 'react'


export class Searchbar extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div style={{width: 200}}>
                <TextField
                    label="Site Search"
                    placeholder='Type to search for a site...'
                />
            </div>
        )
    }
}
