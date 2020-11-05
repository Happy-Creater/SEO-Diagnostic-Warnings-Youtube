import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoGoogleMyBusinessComponent } from './seo-google-my-business.component';

describe('SeoGoogleMyBusinessComponent', () => {
  let component: SeoGoogleMyBusinessComponent;
  let fixture: ComponentFixture<SeoGoogleMyBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoGoogleMyBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoGoogleMyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
