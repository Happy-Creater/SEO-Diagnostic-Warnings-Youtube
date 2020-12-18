import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaAdsComponent } from './sea-ads.component';

describe('SeaAdsComponent', () => {
  let component: SeaAdsComponent;
  let fixture: ComponentFixture<SeaAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
