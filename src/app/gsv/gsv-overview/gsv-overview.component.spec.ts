import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsvOverviewComponent } from './gsv-overview.component';

describe('GsvOverviewComponent', () => {
  let component: GsvOverviewComponent;
  let fixture: ComponentFixture<GsvOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsvOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsvOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
