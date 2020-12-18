import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarLoadingComponent } from './progressbar-loading.component';

describe('ProgressbarLoadingComponent', () => {
  let component: ProgressbarLoadingComponent;
  let fixture: ComponentFixture<ProgressbarLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
