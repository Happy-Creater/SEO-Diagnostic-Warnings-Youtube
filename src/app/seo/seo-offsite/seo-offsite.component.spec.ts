import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOffsiteComponent } from './seo-offsite.component';

describe('SeoOffsiteComponent', () => {
  let component: SeoOffsiteComponent;
  let fixture: ComponentFixture<SeoOffsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoOffsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoOffsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
