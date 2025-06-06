import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursesComponent } from './student-courses.component';
import { MatListModule } from '@angular/material/list';

describe('StudentCoursesComponent', () => {
  let component: StudentCoursesComponent;
  let fixture: ComponentFixture<StudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCoursesComponent],
      imports: [MatListModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
