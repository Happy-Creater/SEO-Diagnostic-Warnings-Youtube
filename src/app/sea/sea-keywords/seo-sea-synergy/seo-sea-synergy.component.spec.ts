import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSeaSynergyComponent } from './seo-sea-synergy.component';

describe('SeoSeaSynergyComponent', () => {
  let component: SeoSeaSynergyComponent;
  let fixture: ComponentFixture<SeoSeaSynergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoSeaSynergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoSeaSynergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
