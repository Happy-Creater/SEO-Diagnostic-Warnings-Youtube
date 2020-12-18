import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsServerComponent } from './settings-configurations-server.component';

describe('SettingsConfigurationsServerComponent', () => {
  let component: SettingsConfigurationsServerComponent;
  let fixture: ComponentFixture<SettingsConfigurationsServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
