import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStandardComponent } from './table-standard.component';

describe('TableStandardComponent', () => {
  let component: TableStandardComponent;
  let fixture: ComponentFixture<TableStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
