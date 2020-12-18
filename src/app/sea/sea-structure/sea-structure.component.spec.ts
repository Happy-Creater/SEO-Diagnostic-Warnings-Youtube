import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaStructureComponent } from './sea-structure.component';

describe('SeaStructureComponent', () => {
  let component: SeaStructureComponent;
  let fixture: ComponentFixture<SeaStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
