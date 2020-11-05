/**
 * Item of table standard.
 */
export class TableStandardItem {
    first: number;
    row: number;
    sortCol: string;
    sortType: string;
    event?: string;

    /**
     * Initialize item of table standard.
     * @param first first number of data
     * @param row number row of data
     * @param sortCol sort column
     * @param sortType sort type
     */
    constructor(first: number, row: number, sortCol: string, sortType: string, event?: string) {
        this.first = first;
        this.row = row;
        this.sortCol = sortCol;
        this.sortType = sortType;
        this.event = event;
    }
}