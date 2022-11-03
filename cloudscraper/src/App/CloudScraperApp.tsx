import React from "react";
import { Searchbar } from "../View/Searchbar";
import { RenderSitesList } from "../View/SiteList";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { RequestSitesButton } from "../View/RequestSitesButton";
import { TokenFetcher } from "../Model/TokenFetcher";
import { ISitesArrayInterface } from "../Model/Interfaces/ISitesArrayInterface";

class CloudScraperApp extends React.Component<any, any > {
  appServices = new AppServices();

  constructor(props: any) {
    super(props);
  }

  private onListUpdateCallback(): void {
    console.log("Forced update");
    this.forceUpdate();
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>
          <TokenFetcher myApp={this.appServices} />
          <PageLayout> 
            <AuthenticatedTemplate> 
              <RequestSitesButton appServices={this.appServices} updateCallback={this.onListUpdateCallback.bind(this)} />
              <Searchbar />
              <RenderSitesList appServices={this.appServices} />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>

            </UnauthenticatedTemplate>
          </PageLayout>
        </div>
      </div>

      
    );
  }
}

export default CloudScraperApp;
