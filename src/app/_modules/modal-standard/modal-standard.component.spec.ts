import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStandardComponent } from './modal-standard.component';

describe('ModalStandardComponent', () => {
  let component: ModalStandardComponent;
  let fixture: ComponentFixture<ModalStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
