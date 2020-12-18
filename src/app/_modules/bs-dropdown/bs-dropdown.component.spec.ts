import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDropdownComponent } from './bs-dropdown.component';

describe('BsDropdownComponent', () => {
  let component: BsDropdownComponent;
  let fixture: ComponentFixture<BsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
