import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBenchmarkOverviewComponent } from './seo-benchmark-overview.component';

describe('SeoBenchmarkOverviewComponent', () => {
  let component: SeoBenchmarkOverviewComponent;
  let fixture: ComponentFixture<SeoBenchmarkOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoBenchmarkOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBenchmarkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
