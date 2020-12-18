import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOnsiteComponent } from './seo-onsite.component';

describe('SeoOnsiteComponent', () => {
  let component: SeoOnsiteComponent;
  let fixture: ComponentFixture<SeoOnsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOnsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOnsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
