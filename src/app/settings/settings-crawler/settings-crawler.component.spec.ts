import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCrawlerComponent } from './settings-crawler.component';

describe('SettingsCrawlerComponent', () => {
  let component: SettingsCrawlerComponent;
  let fixture: ComponentFixture<SettingsCrawlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCrawlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
