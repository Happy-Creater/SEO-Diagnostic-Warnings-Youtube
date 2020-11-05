import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxContentPiracyComponent } from './seo-toolbox-content-piracy.component';

describe('SeoToolboxContentPiracyComponent', () => {
  let component: SeoToolboxContentPiracyComponent;
  let fixture: ComponentFixture<SeoToolboxContentPiracyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxContentPiracyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxContentPiracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
