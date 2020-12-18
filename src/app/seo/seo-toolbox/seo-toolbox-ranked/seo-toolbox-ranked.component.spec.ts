import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxRankedComponent } from './seo-toolbox-ranked.component';

describe('SeoToolboxRankedComponent', () => {
  let component: SeoToolboxRankedComponent;
  let fixture: ComponentFixture<SeoToolboxRankedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxRankedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxRankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
