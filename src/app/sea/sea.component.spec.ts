/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeaComponent } from './sea.component';

describe('SeaComponent', () => {
  let component: SeaComponent;
  let fixture: ComponentFixture<SeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
