import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsCrawlBotBehaviorComponent } from './logs-crawl-bot-behavior.component';

describe('LogsCrawlBotBehaviorComponent', () => {
  let component: LogsCrawlBotBehaviorComponent;
  let fixture: ComponentFixture<LogsCrawlBotBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsCrawlBotBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsCrawlBotBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
