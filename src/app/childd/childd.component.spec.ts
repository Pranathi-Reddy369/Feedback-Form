import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddComponent } from './childd.component';

describe('ChilddComponent', () => {
  let component: ChilddComponent;
  let fixture: ComponentFixture<ChilddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChilddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
