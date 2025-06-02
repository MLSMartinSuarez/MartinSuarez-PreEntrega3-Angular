import { Component } from '@angular/core';

@Component({
  selector: 'app-student-courses',
  standalone: false,
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent {
  cursos = ['Angular', 'React', 'Vue'];
}
