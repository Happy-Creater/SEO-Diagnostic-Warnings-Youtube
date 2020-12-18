import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsUsersComponent } from './settings-configurations-users.component';

describe('SettingsConfigurationsUsersComponent', () => {
  let component: SettingsConfigurationsUsersComponent;
  let fixture: ComponentFixture<SettingsConfigurationsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
