import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaOverviewComponent } from './sea-overview.component';

describe('SeaOverviewComponent', () => {
  let component: SeaOverviewComponent;
  let fixture: ComponentFixture<SeaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
