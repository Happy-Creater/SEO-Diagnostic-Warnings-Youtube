import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTrackingComponent } from './data-tracking.component';

describe('DataTrackingComponent', () => {
  let component: DataTrackingComponent;
  let fixture: ComponentFixture<DataTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
