import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorComponent } from './video-tutor.component';

describe('VideoTutorComponent', () => {
  let component: VideoTutorComponent;
  let fixture: ComponentFixture<VideoTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
