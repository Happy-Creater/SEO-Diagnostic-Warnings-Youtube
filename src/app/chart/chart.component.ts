import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  topwarnings = [{val: 9, content: 'Duplicate Content', problem: '250 problems'},
    {val: 8, content: 'Duplicate Content', problem: '250 problems'},
    {val: 7, content: 'Duplicate Content', problem: '250 problems'},
    {val: 9, content: 'Duplicate Content', problem: '250 problems'},
    {val: 5, content: 'Duplicate Content', problem: '250 problems'},
    {val: 6, content: 'Duplicate Content', problem: '250 problems'}];

  details = [{warning: 'Bad nelinking', severity: 9, problem: 109, trend: 'smGraph60', status: '70', recommendation: ''},
    {warning: 'Bad nelinking', severity: 9, problem: 109, trend: 'smGraph61', status: '100', recommendation: ''},
    {warning: 'Bad nelinking', severity: 9, problem: 109, trend: 'smGraph62', status: '50', recommendation: ''},
    {warning: 'Bad nelinking', severity: 8, problem: 109, trend: 'smGraph63', status: '20', recommendation: ''},
    {warning: 'Bad nelinking', severity: 7, problem: 109, trend: 'smGraph64', status: '25', recommendation: ''},
    {warning: 'Bad nelinking', severity: 6, problem: 109, trend: 'smGraph65', status: '60', recommendation: ''},
    {warning: 'Bad nelinking', severity: 5, problem: 109, trend: 'smGraph66', status: '80', recommendation: ''},
    {warning: 'Bad nelinking', severity: 5, problem: 109, trend: 'smGraph67', status: '40', recommendation: ''},
    {warning: 'Bad nelinking', severity: 8, problem: 109, trend: 'smGraph68', status: '90', recommendation: ''},
    {warning: 'Bad nelinking', severity: 9, problem: 109, trend: 'smGraph69', status: '10', recommendation: ''}];

}
