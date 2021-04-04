import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtScoreComponent } from './yt-score.component';

describe('YtScoreComponent', () => {
  let component: YtScoreComponent;
  let fixture: ComponentFixture<YtScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
