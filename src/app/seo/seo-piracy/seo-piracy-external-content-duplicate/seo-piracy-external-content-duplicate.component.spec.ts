import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPiracyExternalContentDuplicateComponent } from './seo-piracy-external-content-duplicate.component';

describe('SeoPiracyExternalContentDuplicateComponent', () => {
  let component: SeoPiracyExternalContentDuplicateComponent;
  let fixture: ComponentFixture<SeoPiracyExternalContentDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoPiracyExternalContentDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPiracyExternalContentDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
