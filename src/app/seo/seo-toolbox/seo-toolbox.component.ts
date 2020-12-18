import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { SeoComponent } from '../seo.component';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { TOOLBOX_MOCK_MENU, ToolboxMenu } from "app/seo/seo-toolbox/seo-toolbox-mock-menu";
import { environment } from 'environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-seo-toolbox',
  templateUrl: './seo-toolbox.component.html',
  styleUrls: ['./seo-toolbox.component.css']
})
export class SeoToolboxComponent implements OnInit {


  constructor(
    private global: GlobalVariableService,
    private translate: TranslateService
  ) { }

  menu: ToolboxMenu[];
  row: Object[];
  ELEMENT_PER_ROW = 3;

  ngOnInit() {
    this.generateMenuToolbox();
  }

  generateMenuToolbox() {
    this.row = new Array();
    this.menu = new Array();

    TOOLBOX_MOCK_MENU.forEach((element, index) => {
      if (this.global.getUserRole() == 'USER') {
        if (element.id == 'toolbox-keyword') {
          return;
        } else if (element.id == 'toolbox-ranked') {
          return;
        }
      }
      if (environment.MONETORING_TYPE != 'test' && element.id == 'toolbox-search') {
        return;
      }
      this.menu.push(element);
    });

    /**
     * set Menu with Array
     */
    let obj = new Array();
    this.menu.forEach((element, index) => {
      obj.push(element);
      if (obj.length == this.ELEMENT_PER_ROW) {
        obj.forEach((element, index) => {
          if (index != obj.length - 1) {
            element.class += ' right';
          }
        });
        this.row.push(obj);
        obj = new Array();
      }
    });
    if (obj.length > 0) {
      obj.forEach((element, index) => {
        element.class += ' right';
      });
      this.row.push(obj);
    }
    this.row.forEach((element, index) => {
      if (index < this.row.length - 1) {
        let obj = JSON.parse(JSON.stringify(element));
        obj.forEach(element => {
          element.class += ' bottom';
        });
        this.row[index] = obj;
      }
    });
  }

  setNormalText(str) {
    let result = str.toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  setUpperCaseText(str) {
    return str.toUpperCase();
  }

  setLowerCaseText(str) {
    return str.toLowerCase();
  }

  translateString(str: string) {
    return this.translate.instant(str);
  }

}
