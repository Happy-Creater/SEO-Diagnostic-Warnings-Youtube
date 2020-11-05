import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSetComponent } from './settings-set.component';

describe('SettingsSetComponent', () => {
  let component: SettingsSetComponent;
  let fixture: ComponentFixture<SettingsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
