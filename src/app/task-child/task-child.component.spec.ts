import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChildComponent } from './task-child.component';

describe('TaskChildComponent', () => {
  let component: TaskChildComponent;
  let fixture: ComponentFixture<TaskChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
