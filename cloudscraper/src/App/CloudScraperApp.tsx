import React, { useState } from "react";
import { Searchbar } from "../View/Searchbar";
import { SiteList } from "../View/SiteList";
// import { Authenticator } from "./Authenticator";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { RequestSitesButton } from "../View/RequestSitesButton";
import { TokenFetcher } from "../Model/TokenFetcher";

class CloudScraperApp extends React.Component<any, any > {
  appServices = new AppServices();

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>
          <TokenFetcher myApp={this.appServices} />
          <PageLayout> 
            <AuthenticatedTemplate> 
              <RequestSitesButton appService={this.appServices}/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate />
          </PageLayout>
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
