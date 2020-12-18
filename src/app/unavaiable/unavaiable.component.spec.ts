import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavaiableComponent } from './unavaiable.component';

describe('UnavaiableComponent', () => {
  let component: UnavaiableComponent;
  let fixture: ComponentFixture<UnavaiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnavaiableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavaiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
