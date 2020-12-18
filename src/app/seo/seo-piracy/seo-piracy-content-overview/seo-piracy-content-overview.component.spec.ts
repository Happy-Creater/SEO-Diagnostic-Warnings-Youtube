import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPiracyContentOverviewComponent } from './seo-piracy-content-overview.component';

describe('SeoPiracyContentOverviewComponent', () => {
  let component: SeoPiracyContentOverviewComponent;
  let fixture: ComponentFixture<SeoPiracyContentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoPiracyContentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPiracyContentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
