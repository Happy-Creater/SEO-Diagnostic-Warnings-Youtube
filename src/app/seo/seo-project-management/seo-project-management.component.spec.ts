import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoProjectManagementComponent } from './seo-project-management.component';

describe('SeoProjectManagementComponent', () => {
  let component: SeoProjectManagementComponent;
  let fixture: ComponentFixture<SeoProjectManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoProjectManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoProjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
