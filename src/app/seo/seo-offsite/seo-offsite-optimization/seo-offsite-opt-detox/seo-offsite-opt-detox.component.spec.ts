import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteOptDetoxComponent } from './seo-offsite-opt-detox.component';

describe('SeoOffsiteOptDetoxComponent', () => {
  let component: SeoOffsiteOptDetoxComponent;
  let fixture: ComponentFixture<SeoOffsiteOptDetoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteOptDetoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteOptDetoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
