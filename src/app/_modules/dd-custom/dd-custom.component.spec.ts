import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDCustomComponent } from './dd-custom.component';

describe('DdCustomComponent', () => {
  let component: DDCustomComponent;
  let fixture: ComponentFixture<DDCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
