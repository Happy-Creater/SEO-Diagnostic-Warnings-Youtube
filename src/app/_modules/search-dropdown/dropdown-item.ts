/**
 * Item of dropdown.
 */
export class DropdownItem {
    label: string;
    value: any;
    selected?: boolean;
    labelOption?: string;
    disabled?: boolean;
    /**
     * Initialize item of dropdown.
     * @param label label of dropdown item
     * @param value value of dropdown item
     * @param selected true if item is selected
     */
    constructor(label: string, value: any, selected?: boolean, labelOption?: string, disabled: boolean = false) {
        this.label = label;
        this.value = value;
        this.selected = selected;
        this.labelOption = labelOption;
        this.disabled = disabled;
    }
}