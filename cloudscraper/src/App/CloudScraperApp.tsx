import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import { SignOutButton } from "../View/SignOutButton";
import { SignInButton } from "../View/SignInButton";
import { RenderSitesList } from "../View/RenderSitesList";
import { useObservable } from "../Model/Context/Observable";
import { AppContext } from "../Model/Context/AppContext";
import { PagingButton } from "../View/PagingButton";
import { SearchComponents } from "../View/SearchComponents";

const app = new AppServices();

export const CloudScraperApp = () => {
  const isAuthenticated = useIsAuthenticated();
  const sitesList = useObservable(app.sitesList);
  
    return (
      <div>
        <AppContext.Provider value={{appContext: app}}>
          <TokenFetcher />
          { isAuthenticated ? <SignOutButton /> : <SignInButton />}
          <AuthenticatedTemplate>
            <SearchComponents />
            <RenderSitesList sitesList={sitesList} />
            { (app.nextLink !== "") ? <PagingButton /> : null }
          </AuthenticatedTemplate>
        </AppContext.Provider>
      </div>
    );
}
