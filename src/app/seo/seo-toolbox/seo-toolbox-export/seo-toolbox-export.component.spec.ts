import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoToolboxExportComponent } from './seo-toolbox-export.component';

describe('SeoToolboxExportComponent', () => {
  let component: SeoToolboxExportComponent;
  let fixture: ComponentFixture<SeoToolboxExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoToolboxExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoToolboxExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
