import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtScoreDetailComponent } from './yt-score-detail.component';

describe('YtScoreDetailComponent', () => {
  let component: YtScoreDetailComponent;
  let fixture: ComponentFixture<YtScoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtScoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
