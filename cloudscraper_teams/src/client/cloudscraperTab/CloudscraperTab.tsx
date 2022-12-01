import { SignatureIcon } from '@fluentui/react-northstar';
import * as React from 'react';
import { RenderSitesList } from './RenderSitesList';
import { RequestSites } from './RequestSites';
import { SingleSignOn } from './SingleSignOn';

export const CloudscraperTab = () => {
    console.log("Site reloaded");

    return (
        <div>
            <SingleSignOn />
            <RenderSitesList />
            <p>Test Test</p>
            {/* { RequestSites() } */}
        </div>
    )
    
};
