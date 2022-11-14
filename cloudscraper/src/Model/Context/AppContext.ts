import React from "react";
import { AppServices } from "../AppServices";

export interface IAppContextProps {
    appContext: AppServices;
  }
  
  export const AppContext = React.createContext<IAppContextProps>({
    appContext: new AppServices(),
  });