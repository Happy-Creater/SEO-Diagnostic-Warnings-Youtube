import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFilterModalComponent } from './global-filter-modal.component';

describe('GlobalFilterModalComponent', () => {
  let component: GlobalFilterModalComponent;
  let fixture: ComponentFixture<GlobalFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
