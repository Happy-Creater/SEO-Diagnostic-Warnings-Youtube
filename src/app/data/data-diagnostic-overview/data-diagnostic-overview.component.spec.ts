/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataDiagnosticOverviewComponent } from './data-diagnostic-overview.component';

describe('DataDiagnosticOverviewComponent', () => {
  let component: DataDiagnosticOverviewComponent;
  let fixture: ComponentFixture<DataDiagnosticOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDiagnosticOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDiagnosticOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
