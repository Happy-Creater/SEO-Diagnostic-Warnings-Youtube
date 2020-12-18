import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOverviewComponent } from './seo-offsite-overview.component';

describe('SeoOffsiteOverviewComponent', () => {
  let component: SeoOffsiteOverviewComponent;
  let fixture: ComponentFixture<SeoOffsiteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
