import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaKeywordsControllerComponent } from './sea-keywords-controller.component';

describe('SeaKeywordsControllerComponent', () => {
  let component: SeaKeywordsControllerComponent;
  let fixture: ComponentFixture<SeaKeywordsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaKeywordsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaKeywordsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
