/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeoComponent } from './seo.component';

describe('SeoComponent', () => {
  let component: SeoComponent;
  let fixture: ComponentFixture<SeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
