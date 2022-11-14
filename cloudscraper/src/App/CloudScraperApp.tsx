import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import '../style.css'
import { AppContext } from "../Model/Context/AppContext";
import { SignOutButton } from "../View/SignOutButton";
import { SignInButton } from "../View/SignInButton";
import { SearchBox } from "@fluentui/react";
import { LoadSitesButton } from "../View/LoadSitesButton";
import { RenderSitesList } from "../View/RenderSitesList";
import { useObservable } from "../Model/Context/Observable";

export const CloudScraperApp = () => {
  var app = new AppServices();
  const isAuthenticated = useIsAuthenticated();
  const sitesList = useObservable(app.sitesList);
  
    return (
      <div>
        <AppContext.Provider value={{appContext: app}}>
          <TokenFetcher />
          { isAuthenticated ? <SignOutButton /> : <SignInButton />}
          <AuthenticatedTemplate>
            <SearchBox />
            <LoadSitesButton />
            <RenderSitesList sitesList={sitesList} />
          </AuthenticatedTemplate>
        </AppContext.Provider>
      </div>
    );
}
