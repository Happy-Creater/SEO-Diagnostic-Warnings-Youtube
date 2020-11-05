/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeoInformationComponent } from './seo-information.component';

describe('SeoInformationComponent', () => {
  let component: SeoInformationComponent;
  let fixture: ComponentFixture<SeoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
