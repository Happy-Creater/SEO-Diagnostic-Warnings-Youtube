import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtDetailsComponent } from './yt-details.component';

describe('YtDetailsComponent', () => {
  let component: YtDetailsComponent;
  let fixture: ComponentFixture<YtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
