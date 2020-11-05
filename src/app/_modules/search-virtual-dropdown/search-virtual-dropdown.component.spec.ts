import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVirtualDropdownComponent } from './search-virtual-dropdown.component';

describe('SearchVirtualDropdownComponent', () => {
  let component: SearchVirtualDropdownComponent;
  let fixture: ComponentFixture<SearchVirtualDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVirtualDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVirtualDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
