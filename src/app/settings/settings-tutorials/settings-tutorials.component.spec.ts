import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTutorialsComponent } from './settings-tutorials.component';

describe('SettingsTutorialsComponent', () => {
  let component: SettingsTutorialsComponent;
  let fixture: ComponentFixture<SettingsTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
