import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteDetailsRefdomainsComponent } from './seo-offsite-details-refdomains.component';

describe('SeoOffsiteDetailsRefdomainsComponent', () => {
  let component: SeoOffsiteDetailsRefdomainsComponent;
  let fixture: ComponentFixture<SeoOffsiteDetailsRefdomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteDetailsRefdomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteDetailsRefdomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
