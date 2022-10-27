import React from "react";
import { Searchbar } from "./Searchbar";
import { SiteList } from "./SiteList";
import { Authenticator } from "./Authenticator";


class CloudScraperApp extends React.Component<any, any > {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>
          <Authenticator />
        </div>
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
