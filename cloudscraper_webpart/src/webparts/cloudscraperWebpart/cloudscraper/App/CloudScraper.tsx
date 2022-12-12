import * as React from 'react';
import { AppServices } from '../Model/AppServices';
import { useObservable } from '../Context/Observable';
import { AppContext } from '../Context/AppContext';
import { SearchComponents } from '../View/SearchComponents';
import { RenderSitesList } from '../Model/SitesList';
import { ICloudscraperWebpartProps } from '../ICloudscraperWebpartProps';

const appServices = new AppServices();

// eventually pass context down
export const CloudScraper = (props: ICloudscraperWebpartProps) => {
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

