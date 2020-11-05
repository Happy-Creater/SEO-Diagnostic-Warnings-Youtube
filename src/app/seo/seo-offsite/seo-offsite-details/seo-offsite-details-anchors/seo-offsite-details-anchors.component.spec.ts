import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteDetailsAnchorsComponent } from './seo-offsite-details-anchors.component';

describe('SeoOffsiteDetailsAnchorsComponent', () => {
  let component: SeoOffsiteDetailsAnchorsComponent;
  let fixture: ComponentFixture<SeoOffsiteDetailsAnchorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteDetailsAnchorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteDetailsAnchorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
