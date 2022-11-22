import * as React from 'react';
import styles from './CloudscraperWebpart.module.scss';
import { ICloudscraperWebpartProps } from './ICloudscraperWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchComponents } from "cloudscraper/src/View/SearchComponents";
import { AppServices } from 'cloudscraper/src/Model/AppServices';
import { AppContext } from 'cloudscraper/src/Model/Context/AppContext';
import { useObservable } from 'cloudscraper/src/Model/Context/Observable';

// import { RequestSites } from '../../../../../cloudscraper/src/Model/RequestSites'

const appServices = new AppServices();

export const CloudscraperWebpart = (props: ICloudscraperWebpartProps) => {
  const sitesList = useObservable(appServices.sitesList);

    return (
      <AppContext.Provider value={{appContext: appServices}}>
        <SearchComponents />
        {/* <RenderSitesList sitesList={sitesList} /> */}
      </AppContext.Provider>
    );
  }

