import { Component, OnInit } from '@angular/core';
import { InitializeService } from 'app/_services/initialize/initialize.service';

@Component({
  selector: 'app-unavaiable',
  templateUrl: './unavaiable.component.html',
  styleUrls: ['./unavaiable.component.css']
})
export class UnavaiableComponent implements OnInit {

  constructor(private init: InitializeService) { }

  ngOnInit() {
    this.init.initUserWebsite('/home');
  }

}
