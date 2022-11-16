import React from "react";
import { AppServices } from "../AppServices";

const app = new AppServices();

export interface IAppContextProps {
    appContext: AppServices;
  }
  
  export const AppContext = React.createContext<IAppContextProps>({
    appContext: app,
  });