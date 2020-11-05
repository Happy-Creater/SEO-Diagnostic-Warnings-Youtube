import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBenchmarkInstantBenchmarkComponent } from './seo-benchmark-instant-benchmark.component';

describe('SeoBenchmarkInstantBenchmarkComponent', () => {
  let component: SeoBenchmarkInstantBenchmarkComponent;
  let fixture: ComponentFixture<SeoBenchmarkInstantBenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoBenchmarkInstantBenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoBenchmarkInstantBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
