import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptLinkRecoverComponent } from './seo-offsite-opt-link-recover.component';

describe('SeoOffsiteOptLinkRecoverComponent', () => {
  let component: SeoOffsiteOptLinkRecoverComponent;
  let fixture: ComponentFixture<SeoOffsiteOptLinkRecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptLinkRecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptLinkRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
