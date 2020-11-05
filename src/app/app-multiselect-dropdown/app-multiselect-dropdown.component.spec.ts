import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMultiselectDropdownComponent } from './app-multiselect-dropdown.component';


describe('AppMultiselectDropdownComponent', () => {
  let component: AppMultiselectDropdownComponent;
  let fixture: ComponentFixture<AppMultiselectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMultiselectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMultiselectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
