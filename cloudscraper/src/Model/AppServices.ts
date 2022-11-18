import { IColumn } from "@fluentui/react";
import { Observable } from "./Context/Observable";
import { ISitesArray } from "./Interfaces/ISitesArray";
import { RequestSites } from "./RequestSites";

export class AppServices {
    public userAccessToken: string = "";

    public sitesList = new Observable<ISitesArray[]>([]);
    public nextLink: string = "";

    public searchArgs: string = "&$orderBy=createdDateTime";
    public sortArgs: string = "";
    public isSorted: boolean = false;
    public isSortedDesc: boolean = false;
    public columnName: string = "";

    public onSortChanged(column: IColumn) {
        if (this.columnName !== column.key) {
            this.columnName = column.key;
            this.isSorted = true;
            this.isSortedDesc = false;
            this.searchArgs = ("&$orderBy=" + column?.key);
        }
        else if (this.columnName === column.key) {
            if (this.isSorted == false) {
                this.isSorted = true;
                this.searchArgs = ("&$orderBy=" + column?.key);
            }
            else if (this.isSorted === true && this.isSortedDesc === false) {
                this.isSortedDesc = true;
                this.searchArgs = ("&$orderBy=" + column?.key + " desc");
            }
            else {
                this.isSorted = false;
                this.isSortedDesc = false;
                this.searchArgs = "&$orderBy=createdDateTime";
            }
        }

        column.isSorted = this.isSorted;
        column.isSortedDescending = this.isSortedDesc;
    }

    public getSorted(columnName: string): boolean {
        return (columnName === this.columnName) ? this.isSorted : false;  
    }

    public getSortedDesc(columnName: string): boolean {
        return (columnName === this.columnName) ? this.isSortedDesc : false;
    }

    // this.searchArgs = ("&$orderBy=" + column?.key);
}
