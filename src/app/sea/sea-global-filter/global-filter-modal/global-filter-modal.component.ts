import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DialogRef } from 'ngx-modialog';
import { CustomModalContext } from './custom-modal-context';
import { AbstractCustomDialog } from './abstract-custom-dialog';
import { DropdownItem } from 'app/_modules/dropdown/dropdown-item';

const $ = require('jquery');
import 'assets/scripts/bootstrap-select.js';

@Component({
  selector: 'app-global-filter-modal',
  templateUrl: './global-filter-modal.component.html',
  styleUrls: ['./global-filter-modal.component.css']
})
export class GlobalFilterModalComponent extends AbstractCustomDialog implements OnInit, AfterViewInit {

  filterBox = [
    {
      data: [
        new DropdownItem('Campaign name', 'Campaign name'),
        new DropdownItem('Campaign', 'Campaign'),
        new DropdownItem('Label', 'Label'),
        new DropdownItem('Budget', 'Budget'),
        new DropdownItem('Costs', 'Costs'),
        new DropdownItem('Clicks', 'Clicks'),
        new DropdownItem('Impressions', 'Impressions'),
        new DropdownItem('CTR', 'CTR'),
        new DropdownItem('Average CPC', 'Average CPC'),
        new DropdownItem('Conversions', 'Conversions'),
        new DropdownItem('CPA', 'CPA'),
        new DropdownItem('Conversion Value', 'Conversion Value'),
        new DropdownItem('Conversion rate', 'Conversion rate'),
        new DropdownItem('ROAS', 'ROAS'),
        new DropdownItem('Impr. Share', 'Impr. Share'),
        new DropdownItem('Lost IS (budget)', 'Lost IS (budget)'),
        new DropdownItem('Lost IS (rank)', 'Lost IS (rank)'),
        new DropdownItem('Top IS', 'Top IS'),
        new DropdownItem('Lost top IS (budget)', 'Lost top IS (budget)'),
        new DropdownItem('Lost top IS (rank)', 'Lost top IS (rank)'),
        new DropdownItem('Abs. top IS', 'Abs. top IS'),
        new DropdownItem('Lost abs. top IS (budget)', 'Lost abs. top IS (budget)'),
        new DropdownItem('Lost abs. top IS (rank)', 'Lost abs. top IS (rank)')
      ]
    },
    {
      data: [
        new DropdownItem('contains', 'contains'),
        new DropdownItem('does not contain', 'does not contain'),
        new DropdownItem('equals', 'equals'),
        new DropdownItem('begins with', 'begins with')
      ]
    },
    {
      data: [
        new DropdownItem('>', '>'),
        new DropdownItem('<', '<'),
        new DropdownItem('=', '='),
        new DropdownItem('>=', '>='),
        new DropdownItem('<=', '<='),
        new DropdownItem('<>', '<>')
      ]
    }
  ];

  _filterTemp = [];

  globalFilter = {
    mainSelector: { campaign_type: 0, isEnabledOnlyCampaign: true },
    campaigns: [],
    filterTemp: []
  };

  constructor(public dialog: DialogRef<CustomModalContext>) {
    super(dialog);
    dialog.context.dialogClass = "modal-dialog my-custom-dialog keyword-filter-dialog";

    let currentGlobalFilter = this.context.dataContext.globalFilter;
    if (Object.keys(currentGlobalFilter).length) {
      this.globalFilter = Object.assign({}, JSON.parse(JSON.stringify(currentGlobalFilter)));
    }
  }

  onApply() {
    let globalFilter = Object.assign({}, this.globalFilter);
    this.dialog.close(globalFilter);
  }

  onReset() {
    this.dialog.close({});
  }

  ngAfterViewInit(): void {
    this._filterTemp = this.globalFilter.filterTemp;
    this.setSelectorStyleAndRefresh();
  }

  setSelectorStyleAndRefresh() {
    setTimeout(function () {
      $('.selectpicker').selectpicker('refresh');
      $('.btn-group.bootstrap-select.ng-untouched.ng-pristine.ng-valid').css({ 'margin-right': '20px' });
      $('.btn.dropdown-toggle.btn-default').css({ 'font-weight': 'bold', 'width': '130px' });
    }, 1);
  }

  ngOnInit() {
  }

  getFilterBoxIndex(index: number) {
    if (this._filterTemp[index][0] === 'Campaign name') {
      return this.filterBox[1].data;
    } else {
      return this.filterBox[2].data;
    }
  }

  getFilterDataByIndex(index: number): string {
    return this._filterTemp[index][0];
  }

  isDisabledInput(index: number): boolean {
    let filterType = this.getFilterDataByIndex(index);
    return filterType === 'Campaign' || filterType === 'Label';
  }

  removeFilterBox(position: number) {
    if (this._filterTemp.length) this._filterTemp.splice(position, 1);
  }

  removeClearIconOfInput(filterInput: HTMLInputElement) {
    let clearIcon = filterInput.nextElementSibling as HTMLInputElement;
    if (clearIcon != null) {
      setTimeout(() => {
        (clearIcon).style.display = "none";
      }, 0);
    }
  }

  getCampaigns() {
    if (this.globalFilter.mainSelector.campaign_type == 1) {
      return this.globalFilter.campaigns.filter(campaign => campaign.brand);
    } else if (this.globalFilter.mainSelector.campaign_type == 2) {
      return this.globalFilter.campaigns.filter(campaign => !campaign.brand);
    } else {
      return this.globalFilter.campaigns;
    }
  }

  refreshFilter() {
    this._filterTemp = this.globalFilter.filterTemp = [];
  }

  getFilterCampaignList() {
    let filterCampaignList = [];
    this.getCampaigns().forEach(campaign => {
      filterCampaignList.push(new DropdownItem(campaign.name.trim(), campaign.id, false));
    });
    return filterCampaignList;
  }

  getFilterLabelList() {
    let filterLabelList = [];
    this.getCampaigns().forEach(campaign => {
      if (campaign.labels != undefined) {
        let labels = campaign.labels.substring(1, campaign.labels.length - 1);
        labels.split(", ").forEach(labelElement => {
          if (!filterLabelList.some(item => item.label == labelElement.trim())) {
            filterLabelList.push(new DropdownItem(labelElement.trim(), labelElement.trim(), false));
          }
        });
      }
    });
    return filterLabelList;
  }

  onFilterChange(index: number, filterPosition: number, value) {
    let filterInput = document.getElementById("filterInput-" + index) as HTMLInputElement;
    switch (filterPosition) {
      case 0:
        switch (value) {
          case 'Campaign name':
            this._filterTemp[index][1] = this.filterBox[1].data[0].value;
            if (filterInput != null) this._filterTemp[index][2] = filterInput.value;
            break;
          case 'Campaign':
            this._filterTemp[index][1] = [this.getFilterCampaignList(), [], '0 campaign selected'];
            this._filterTemp[index][2] = "";
            break;
          case 'Label':
            this._filterTemp[index][1] = [this.getFilterLabelList(), [], '0 label selected'];
            this._filterTemp[index][2] = "";
            break;
          default:
            this._filterTemp[index][1] = this.filterBox[2].data[0].value;
            if (filterInput != null && filterInput.value.length) {
              if (filterInput.value.trim() !== "") {
                if (Number.isNaN(Number(filterInput.value))) {
                  this.removeClearIconOfInput(filterInput);
                  this._filterTemp[index][2] = "";
                } else {
                  this._filterTemp[index][2] = Number(filterInput.value);
                }
              } else {
                this.removeClearIconOfInput(filterInput);
                this._filterTemp[index][2] = "";
              }
            }
            break;
        }
        this._filterTemp[index][filterPosition] = value;
        this.setSelectorStyleAndRefresh();
        break;
      case 1:
        if (!this.isDisabledInput(index)) {
          this._filterTemp[index][filterPosition] = value;
          this.setSelectorStyleAndRefresh();
        }
        break;
      case 2:
        if (value.length) {
          if (this._filterTemp[index][0] === 'Campaign name') {
            this._filterTemp[index][filterPosition] = value;
          } else {
            if (!Number.isNaN(Number(value))) {
              this._filterTemp[index][filterPosition] = Number(value);
            } else if (value === '-') {
              this._filterTemp[index][filterPosition] = value;
            } else {
              filterInput.value = this._filterTemp[index][filterPosition];
            }
          }
        } else {
          this._filterTemp[index][filterPosition] = value;
        }
        break;
    }
  }

  addFilterBox() {
    let arr = [
      this.filterBox[0].data[0].value,
      this.filterBox[1].data[0].value,
      ''
    ]
    this._filterTemp.push(arr);
    this.setSelectorStyleAndRefresh();
  }

  onCampaignListChange(index, newItems) {
    this._filterTemp[index][1][0] = this.getFilterCampaignList();
    this._filterTemp[index][1][1] = newItems == null ? [] : newItems;
    this._filterTemp[index][1][2] = newItems.length + (newItems.length > 1 ? " campaigns" : " campaign") + " selected";
  }

  onLabelListChange(index, newItems) {
    this._filterTemp[index][1][0] = this.getFilterLabelList();
    this._filterTemp[index][1][1] = newItems == null ? [] : newItems;
    this._filterTemp[index][1][2] = newItems.length + (newItems.length > 1 ? " labels" : " label") + " selected";
  }

}