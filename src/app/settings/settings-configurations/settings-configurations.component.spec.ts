import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsComponent } from './settings-configurations.component';

describe('SettingsConfigurationsComponent', () => {
  let component: SettingsConfigurationsComponent;
  let fixture: ComponentFixture<SettingsConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
