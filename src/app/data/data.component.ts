import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { InitializeService } from '../_services/initialize/initialize.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private router: Router,
    private init: InitializeService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.init.initUserWebsiteByParam(null, this.activeRoute);
  }
}
