import { ISitesArray } from "./ISitesArray"

export interface ISearchComponents {
    RequestSitesFunc: Function
    sitesList: ISitesArray[]
    setSitesListFunc: Function
    userAccessToken: string
}