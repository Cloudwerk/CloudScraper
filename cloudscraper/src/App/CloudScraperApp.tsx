import React, { useState } from "react";
import { RenderSitesList } from "../View/RenderSitesList";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import { RequestSites } from "../Model/RequestSites";
import '../style.css'
import { SearchComponents } from "../View/SearchComponents";

const CloudScraperApp = () => {
  var app = new AppServices();
  const [ sitesList, setSitesList ] = useState(app.sitesList);
  const [ userAccessToken, setUserAccessToken ] = useState(app.userAccessToken);

    return (
      <div>
        <TokenFetcher setToken={setUserAccessToken}/>
        <PageLayout>
          <AuthenticatedTemplate>
            <SearchComponents RequestSitesFunc={RequestSites} setSitesListFunc={setSitesList} userAccessToken={userAccessToken} />
            <RenderSitesList sitesArray={sitesList} />
          </AuthenticatedTemplate>
        </PageLayout>
      </div>



      // <div>
      //   <div>
      //     <TokenFetcher myApp={this.appServices} />
      //     <PageLayout> 
      //       <AuthenticatedTemplate> 
      //         <div className={"DisplayFlex"}>
      //         <SearchComponents appServices={this.appServices} updateCallback={this.onListUpdateCallback.bind(this)}/>
      //         {/* <Searchbar />
      //         <RequestSitesButton appServices={this.appServices} updateCallback={this.onListUpdateCallback.bind(this)} /> */}
      //         </div>
      //         <RenderSitesList appServices={this.appServices} />
      //       </AuthenticatedTemplate>
      //       <UnauthenticatedTemplate>

      //       </UnauthenticatedTemplate>
      //     </PageLayout>
      //   </div>
      // </div>

      
    );
}

export default CloudScraperApp;
