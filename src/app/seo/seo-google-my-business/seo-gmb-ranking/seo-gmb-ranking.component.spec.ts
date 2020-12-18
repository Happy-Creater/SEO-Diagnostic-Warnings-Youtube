import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGmbRankingComponent } from './seo-gmb-ranking.component';

describe('SeoGmbRankingComponent', () => {
  let component: SeoGmbRankingComponent;
  let fixture: ComponentFixture<SeoGmbRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGmbRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGmbRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
