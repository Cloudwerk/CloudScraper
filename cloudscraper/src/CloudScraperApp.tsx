import React from "react";
import { Searchbar } from "./Searchbar";
import { SiteList } from "./SiteList";


class CloudScraperApp extends React.Component<any, any > {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>
          <Searchbar />
        </div>
        <div>
          <SiteList />
        </div>
      </div>

      
    );
  }
    
}

export default CloudScraperApp;
