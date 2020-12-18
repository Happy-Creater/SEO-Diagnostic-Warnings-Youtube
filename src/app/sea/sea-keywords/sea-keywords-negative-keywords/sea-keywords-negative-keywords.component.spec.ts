import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaKeywordsNegativeKeywordsComponent } from './sea-keywords-negative-keywords.component';

describe('SeaKeywordsNegativeKeywordsComponent', () => {
  let component: SeaKeywordsNegativeKeywordsComponent;
  let fixture: ComponentFixture<SeaKeywordsNegativeKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaKeywordsNegativeKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaKeywordsNegativeKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
