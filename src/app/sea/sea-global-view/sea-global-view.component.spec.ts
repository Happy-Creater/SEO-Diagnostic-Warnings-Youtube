import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaGlobalViewComponent } from './sea-global-view.component';

describe('SeaGlobalViewComponent', () => {
  let component: SeaGlobalViewComponent;
  let fixture: ComponentFixture<SeaGlobalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaGlobalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaGlobalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
