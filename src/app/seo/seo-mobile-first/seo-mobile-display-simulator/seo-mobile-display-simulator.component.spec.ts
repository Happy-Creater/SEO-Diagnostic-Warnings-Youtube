import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoMobileDisplaySimulatorComponent } from './seo-mobile-display-simulator.component';

describe('SeoMobileDisplaySimulatorComponent', () => {
  let component: SeoMobileDisplaySimulatorComponent;
  let fixture: ComponentFixture<SeoMobileDisplaySimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoMobileDisplaySimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoMobileDisplaySimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
