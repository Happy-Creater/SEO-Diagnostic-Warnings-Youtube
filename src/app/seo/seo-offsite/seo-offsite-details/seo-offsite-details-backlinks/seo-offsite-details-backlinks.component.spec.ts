import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteDetailsBacklinksComponent } from './seo-offsite-details-backlinks.component';

describe('SeoOffsiteDetailsBacklinksComponent', () => {
  let component: SeoOffsiteDetailsBacklinksComponent;
  let fixture: ComponentFixture<SeoOffsiteDetailsBacklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteDetailsBacklinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteDetailsBacklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
