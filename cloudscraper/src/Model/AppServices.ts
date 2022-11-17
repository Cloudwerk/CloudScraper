import { Observable } from "./Context/Observable";
import { ISitesArray } from "./Interfaces/ISitesArray";

export class AppServices {
    public userAccessToken: string = "";
    public searchArgs: string = "";
    public sortArgs: string = "";
    public sitesList = new Observable<ISitesArray[]>([]);
    public prevLink: string = "";
    public nextLink: string = "";
}
