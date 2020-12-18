import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxComponent } from './seo-toolbox.component';

describe('SeoToolboxComponent', () => {
  let component: SeoToolboxComponent;
  let fixture: ComponentFixture<SeoToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
