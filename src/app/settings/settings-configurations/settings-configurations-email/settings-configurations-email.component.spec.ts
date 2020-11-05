import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationsEmailComponent } from './settings-configurations-email.component';

describe('SettingsConfigurationsEmailComponent', () => {
  let component: SettingsConfigurationsEmailComponent;
  let fixture: ComponentFixture<SettingsConfigurationsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationsEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
