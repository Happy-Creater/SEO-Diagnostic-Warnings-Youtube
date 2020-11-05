import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaReportingComponent } from './sea-reporting.component';

describe('SeaReportingComponent', () => {
  let component: SeaReportingComponent;
  let fixture: ComponentFixture<SeaReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
