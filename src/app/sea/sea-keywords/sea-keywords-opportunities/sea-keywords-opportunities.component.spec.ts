import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaKeywordsOpportunitiesComponent } from './sea-keywords-opportunities.component';

describe('SeaKeywordsOpportunitiesComponent', () => {
  let component: SeaKeywordsOpportunitiesComponent;
  let fixture: ComponentFixture<SeaKeywordsOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaKeywordsOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaKeywordsOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
