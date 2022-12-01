import { AuthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import { SignOutButton } from "../View/SignOutButton";
import { SignInButton } from "../View/SignInButton";
import { RenderSitesList } from "../View/RenderSitesList";
import { useObservable } from "../Model/Context/Observable";
import { AppContext } from "../Model/Context/AppContext";
import { PagingButton } from "../View/PagingButton";
import { SearchComponents } from "../View/SearchComponents";
import React from "react";
import { useTeams } from "msteams-react-base-component";

const appServices = new AppServices();

export const CloudScraperApp = () => {
  const isAuthenticated = useIsAuthenticated();
  const [{ inTeams }] = useTeams();
  const sitesList = useObservable(appServices.sitesList);
  
    return (
      <div>
        <AppContext.Provider value={{appContext: appServices}}>
          <TokenFetcher />
          { inTeams ? null : isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            <SearchComponents />
            <RenderSitesList sitesList={sitesList} />
            { (appServices.nextLink !== "") ? <PagingButton /> : null }
        </AppContext.Provider>
      </div>
    );
}
