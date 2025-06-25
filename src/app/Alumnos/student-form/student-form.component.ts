import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAvailableCourses } from '../../store/courses/courses.selectors';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentForm: FormGroup;
  registered: any = null;
  courses$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    public auth: AuthService,
    private store: Store
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });

    this.courses$ = this.store.select(selectAvailableCourses);

    this.auth.authUser$.subscribe(user => {
      if (user && user.role === 'student') {
        const registration = this.studentService.getStudents().find(
          student => student.name === user.username
        );
        if (registration) {
          this.registered = registration;
        }
      }
    });
  }
  onSubmit() {
    if (this.studentForm.valid) {
      const studentData: Student = {
        name: this.studentForm.value.name,
        lastname: this.studentForm.value.lastname,
        course: this.studentForm.value.course
      };
      this.studentService.addStudent(studentData);
      this.registered = studentData;
      this.studentForm.reset();
    }
  }
}
