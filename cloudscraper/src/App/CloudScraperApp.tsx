import { useState } from "react";
import { PageLayout } from "../View/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { AppServices } from "../Model/AppServices";
import { TokenFetcher } from "../Model/TokenFetcher";
import '../style.css'
import { SearchComponents } from "../View/SearchComponents";
import { AppContext } from "../Model/Context/AppContext";
import { useObservable } from "../Model/Context/Observable";

export const CloudScraperApp = () => {
  var app = new AppServices();
  const sitesList = useObservable(app.sitesList);

    return (
      <div>
        <AppContext.Provider value={{appContext: app}}>
          <TokenFetcher />
          <PageLayout>
            <AuthenticatedTemplate>
              <SearchComponents />
          </AuthenticatedTemplate>
          </PageLayout>
        </AppContext.Provider>
      </div>
    );
}
