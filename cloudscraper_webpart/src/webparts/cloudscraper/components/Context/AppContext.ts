import * as React from "react";
import { AppServices } from "../Model/AppServices";

const app = new AppServices();

export interface IAppContextProps {
    appContext: AppServices;
  }
  
  export const AppContext = React.createContext<IAppContextProps>({
    appContext: app,
  });