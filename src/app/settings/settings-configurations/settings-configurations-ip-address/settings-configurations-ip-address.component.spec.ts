import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsIpAddressComponent } from './settings-configurations-ip-address.component';

describe('SettingsConfigurationsIpAddressComponent', () => {
  let component: SettingsConfigurationsIpAddressComponent;
  let fixture: ComponentFixture<SettingsConfigurationsIpAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsIpAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsIpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
