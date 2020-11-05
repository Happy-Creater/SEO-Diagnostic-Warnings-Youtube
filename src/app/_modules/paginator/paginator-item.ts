/**
 * Item of paginator.
 */
export class PaginatorItem {
    first: number;
    row: number;

    /**
     * Initialize item of paginator.
     * @param first first number of data
     * @param row number row of data
     */
    constructor(first: number, row: number) {
        this.first = first;
        this.row = row;
    }
}