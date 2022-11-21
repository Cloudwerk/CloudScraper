import { IColumn } from "@fluentui/react";
import { Observable } from "./Context/Observable";
import { ISitesArray } from "./Interfaces/ISitesArray";

export class AppServices {
    public userAccessToken: string = ""; 

    public sitesList = new Observable<ISitesArray[]>([]); // Observable to track changes
    public nextLink: string = ""; // Link to load further results if there are any
    public loadCounter: number = 1; // Track how many more pages were loaded, used for sorting

    public searchArgs: string = "";
    public sortArgs: string = "&$orderBy=createdDateTime";
    public isSorted: boolean = false;
    public isSortedDesc: boolean = false;
    public columnName: string = "";

    public onSortChanged(column: IColumn) {
        if (this.columnName !== column.key) {
            this.columnName = column.key;
            this.isSorted = true;
            this.isSortedDesc = false;
            this.sortArgs = ("&$orderBy=" + column?.key);
        }
        else if (this.columnName === column.key) {
            if (this.isSorted == false) {
                this.isSorted = true;
                this.sortArgs = ("&$orderBy=" + column?.key);
            }
            else if (this.isSorted === true && this.isSortedDesc === false) {
                this.isSortedDesc = true;
                this.sortArgs = ("&$orderBy=" + column?.key + " desc");
            }
            else {
                this.isSorted = false;
                this.isSortedDesc = false;
                this.sortArgs = "&$orderBy=createdDateTime";
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
}
