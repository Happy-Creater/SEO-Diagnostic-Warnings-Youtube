import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsWebsiteComponent } from './settings-configurations-website.component';

describe('SettingsConfigurationsWebsiteComponent', () => {
  let component: SettingsConfigurationsWebsiteComponent;
  let fixture: ComponentFixture<SettingsConfigurationsWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
