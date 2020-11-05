import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaKeywordsSearchtermsComponent } from './sea-keywords-searchterms.component';

describe('SeaKeywordsSearchtermsComponent', () => {
  let component: SeaKeywordsSearchtermsComponent;
  let fixture: ComponentFixture<SeaKeywordsSearchtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaKeywordsSearchtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaKeywordsSearchtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
