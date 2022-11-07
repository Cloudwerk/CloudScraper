import React from "react";
import { Searchbar } from "../View/Searchbar";
import { RenderSitesList } from "../View/SiteList";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { RequestSitesButton } from "../View/RequestSitesButton";
import { TokenFetcher } from "../Model/TokenFetcher";
import '../style.css'
import { SearchComponents } from "../View/SearchComponents";

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
              <div className={"DisplayFlex"}>
              <SearchComponents appServices={this.appServices} updateCallback={this.onListUpdateCallback.bind(this)}/>
              {/* <Searchbar />
              <RequestSitesButton appServices={this.appServices} updateCallback={this.onListUpdateCallback.bind(this)} /> */}
              </div>
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
