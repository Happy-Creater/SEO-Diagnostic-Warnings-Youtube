import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCommentsComponent } from './questions-comments.component';

describe('QuestionsCommentsComponent', () => {
  let component: QuestionsCommentsComponent;
  let fixture: ComponentFixture<QuestionsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
