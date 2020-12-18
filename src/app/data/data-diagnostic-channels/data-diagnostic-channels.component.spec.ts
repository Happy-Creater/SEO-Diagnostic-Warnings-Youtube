import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDiagnosticChannelsComponent } from './data-diagnostic-channels.component';

describe('DataDiagnosticChannelsComponent', () => {
  let component: DataDiagnosticChannelsComponent;
  let fixture: ComponentFixture<DataDiagnosticChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDiagnosticChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDiagnosticChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
