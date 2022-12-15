import * as React from 'react';
import { AppContext } from './Context/AppContext';
import { useObservable } from './Context/Observable';
import { ICloudscraperProps } from './ICloudscraperProps';
import { SearchComponents } from './View/SearchComponents';
import { SitesList } from './View/SitesList';


export const Cloudscraper = (props: ICloudscraperProps) => {
  const appServices = props.appServices;
  const sitesArray = useObservable(appServices.sitesList);
  
  return (
    <div>
      <AppContext.Provider value={{appContext: appServices}} >
        <SearchComponents />
        <SitesList sitesList={sitesArray} />
      </AppContext.Provider>
    </div>
  )
}

