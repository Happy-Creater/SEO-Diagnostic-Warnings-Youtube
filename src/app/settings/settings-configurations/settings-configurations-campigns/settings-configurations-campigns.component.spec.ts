import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsCampignsComponent } from './settings-configurations-campigns.component';

describe('SettingsConfigurationsCampignsComponent', () => {
  let component: SettingsConfigurationsCampignsComponent;
  let fixture: ComponentFixture<SettingsConfigurationsCampignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsCampignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsCampignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
