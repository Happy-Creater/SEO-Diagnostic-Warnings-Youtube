import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWarningsComponent } from './settings-warnings.component';

describe('SettingsWarningsComponent', () => {
  let component: SettingsWarningsComponent;
  let fixture: ComponentFixture<SettingsWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
