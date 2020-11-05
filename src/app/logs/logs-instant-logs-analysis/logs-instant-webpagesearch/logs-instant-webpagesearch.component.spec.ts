import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsInstantWebpagesearchComponent } from './logs-instant-webpagesearch.component';

describe('LogsInstantWebpagesearchComponent', () => {
  let component: LogsInstantWebpagesearchComponent;
  let fixture: ComponentFixture<LogsInstantWebpagesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsInstantWebpagesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsInstantWebpagesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
