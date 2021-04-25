import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeHomeComponent } from './home.component';

describe('YoutubeHomeComponent', () => {
  let component: YoutubeHomeComponent;
  let fixture: ComponentFixture<YoutubeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
