import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtThematicReportComponent } from './yt-thematic-report.component';

describe('YtThematicReportComponent', () => {
  let component: YtThematicReportComponent;
  let fixture: ComponentFixture<YtThematicReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtThematicReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtThematicReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
