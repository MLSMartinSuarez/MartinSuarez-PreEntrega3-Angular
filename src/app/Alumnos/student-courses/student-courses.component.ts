import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAvailableCourses } from '../../store/courses/courses.selectors';
import { addCourse, updateCourse } from '../../store/courses/courses.actions';

@Component({
  selector: 'app-student-courses',
  standalone: false,
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent {  courses$: Observable<string[]>;
  newCourse = '';
  editIndex: number | null = null;
  editCourseValue = '';
  
  constructor(public auth: AuthService, private store: Store) {
    this.courses$ = this.store.select(selectAvailableCourses);
  }

  onNewCourseInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newCourse = input.value;
  }

  onEditCourseInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editCourseValue = input.value;
  }

  addCourse() {
    if (this.newCourse.trim()) {
      this.store.dispatch(addCourse({ course: this.newCourse.trim() }));
      this.newCourse = '';
    }
  }

  editCourse(index: number) {
    this.editIndex = index;
    this.courses$.subscribe(courses => {
      this.editCourseValue = courses[index];
    }).unsubscribe();
  }

  saveCourse(index: number) {
    if (this.editCourseValue.trim()) {
      this.store.dispatch(updateCourse({ index, course: this.editCourseValue.trim() }));
      this.editIndex = null;
      this.editCourseValue = '';
    }
  }

  cancelEdit() {
    this.editIndex = null;
    this.editCourseValue = '';
  }
}
