import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxWebpageComponent } from './seo-toolbox-webpage.component';

describe('SeoToolboxWebpageComponent', () => {
  let component: SeoToolboxWebpageComponent;
  let fixture: ComponentFixture<SeoToolboxWebpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxWebpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
