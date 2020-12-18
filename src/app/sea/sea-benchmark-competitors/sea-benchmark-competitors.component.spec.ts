import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBenchmarkCompetitorsComponent } from './sea-benchmark-competitors.component';

describe('SeaBenchmarkCompetitorsComponent', () => {
  let component: SeaBenchmarkCompetitorsComponent;
  let fixture: ComponentFixture<SeaBenchmarkCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaBenchmarkCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaBenchmarkCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
