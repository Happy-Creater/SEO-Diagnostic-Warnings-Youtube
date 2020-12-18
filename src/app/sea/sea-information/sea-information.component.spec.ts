import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaInformationComponent } from './sea-information.component';

describe('SeaInformationComponent', () => {
  let component: SeaInformationComponent;
  let fixture: ComponentFixture<SeaInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
