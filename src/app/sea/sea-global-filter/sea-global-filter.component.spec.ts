import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaGlobalFilterComponent } from './sea-global-filter.component';

describe('SeaGlobalFilterComponent', () => {
  let component: SeaGlobalFilterComponent;
  let fixture: ComponentFixture<SeaGlobalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaGlobalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaGlobalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
