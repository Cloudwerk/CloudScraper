import { ISitesArray } from "./ISitesArray";

export interface IRenderSitesList {
    sitesArray: ISitesArray[]
    sortArg: string
    setSortarg: Function
}