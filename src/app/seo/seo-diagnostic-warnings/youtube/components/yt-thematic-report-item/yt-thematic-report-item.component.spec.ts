import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtThematicReportItemComponent } from './yt-thematic-report-item.component';

describe('YtThematicReportItemComponent', () => {
  let component: YtThematicReportItemComponent;
  let fixture: ComponentFixture<YtThematicReportItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtThematicReportItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtThematicReportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
