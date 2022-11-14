import { useState } from "react";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import '../style.css'
import { SearchComponents } from "../View/SearchComponents";
import { AppContext } from "../Model/Context/AppContext";
import { SignOutButton } from "../View/SignOutButton";
import { SignInButton } from "../View/SignInButton";
import { SearchBox } from "@fluentui/react";
import { LoadSitesButton } from "../View/LoadSitesButton";
import { RenderSitesList } from "../View/RenderSitesList";

export const CloudScraperApp = () => {
  var app = new AppServices();
  const isAuthenticated = useIsAuthenticated();
  

    return (
      <div>
        <AppContext.Provider value={{appContext: app}}>
          <TokenFetcher />
          { isAuthenticated ? <SignOutButton /> : <SignInButton />}
          <AuthenticatedTemplate>
            <SearchBox />
            <LoadSitesButton />
            <RenderSitesList />
          </AuthenticatedTemplate>
        </AppContext.Provider>
      </div>
    );
}
