import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxComparisonComponent } from './seo-toolbox-comparison.component';

describe('SeoToolboxComparisonComponent', () => {
  let component: SeoToolboxComparisonComponent;
  let fixture: ComponentFixture<SeoToolboxComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
