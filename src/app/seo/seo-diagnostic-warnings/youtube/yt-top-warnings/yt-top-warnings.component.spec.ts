import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtTopWarningsComponent } from './yt-top-warnings.component';

describe('YtTopWarningsComponent', () => {
  let component: YtTopWarningsComponent;
  let fixture: ComponentFixture<YtTopWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtTopWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtTopWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
