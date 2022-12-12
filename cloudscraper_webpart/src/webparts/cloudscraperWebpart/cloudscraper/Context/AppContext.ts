import React from "react";
import { AppServices } from "../Model/AppServices";

const appServices = new AppServices();

export interface IAppContextProps {
    appContext: AppServices;
  }
  
  export const AppContext = React.createContext<IAppContextProps>({
    appContext: appServices,
  });