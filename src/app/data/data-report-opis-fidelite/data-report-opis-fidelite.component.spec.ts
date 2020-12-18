import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportOpisFideliteComponent } from './data-report-opis-fidelite.component';

describe('DataReportOpisFideliteComponent', () => {
  let component: DataReportOpisFideliteComponent;
  let fixture: ComponentFixture<DataReportOpisFideliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportOpisFideliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportOpisFideliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
