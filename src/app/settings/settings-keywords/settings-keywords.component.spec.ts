import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsKeywordsComponent } from './settings-keywords.component';

describe('SettingsKeywordsComponent', () => {
  let component: SettingsKeywordsComponent;
  let fixture: ComponentFixture<SettingsKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
