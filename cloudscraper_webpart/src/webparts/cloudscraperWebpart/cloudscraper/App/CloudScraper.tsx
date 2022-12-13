import * as React from 'react';
import { useObservable } from '../Context/Observable';
import { AppContext } from '../Context/AppContext';
import { SearchComponents } from '../View/SearchComponents';
import { RenderSitesList } from '../Model/SitesList';
import { ICloudscraperWebpartProps } from '../ICloudscraperWebpartProps';

// eventually pass context down
export const CloudScraper = (props: ICloudscraperWebpartProps) => {
  const appServices = props.appServices;
  const sitesList = useObservable(appServices.sitesList)

  return (
    <div>
      <AppContext.Provider value={{appContext: appServices}}>
        <SearchComponents />
        <RenderSitesList sitesList={sitesList} />
      </AppContext.Provider>
    </div>
  )
    
}

