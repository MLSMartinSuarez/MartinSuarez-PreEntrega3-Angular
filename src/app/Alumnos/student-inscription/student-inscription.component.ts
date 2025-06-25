import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos';
import { DoCheck } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAvailableCourses } from '../../store/courses/courses.selectors';

@Component({
  selector: 'app-student-inscription',
  standalone: false,
  templateUrl: './student-inscription.component.html',
  styleUrl: './student-inscription.component.css'
})
export class StudentInscriptionComponent implements DoCheck {
  displayedColumns: string[] = ['name', 'lastname', 'course', 'actions'];
  registrations: Student[] = [];
  editIndex: number | null = null;
  editForm: FormGroup;
  courses$: Observable<string[]>;

  constructor(
    private studentService: StudentService,
    public auth: AuthService,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.loadStudents();
    this.editForm = this.fb.group({
      name: [''],
      lastname: [''],
      course: ['']
    });
    this.courses$ = this.store.select(selectAvailableCourses);
  }

  ngDoCheck() {
    this.registrations = this.studentService.getStudents();
  }
  loadStudents() {
    this.registrations = this.studentService.getStudents();
  }

  removeStudent(index: number) {
    this.studentService.removeStudent(index);
    this.loadStudents();
  }

  editStudent(index: number) {
    this.editIndex = index;
    const student = this.registrations[index];
    this.editForm.setValue({
      name: student.name,
      lastname: student.lastname,
      course: student.course
    });
  }

  saveEdit() {
    if (this.editForm.valid && this.editIndex !== null) {
      this.studentService.updateStudent(this.editIndex, this.editForm.value);
      this.editIndex = null;
      this.loadStudents();
    }
  }

  cancelEdit() {
    this.editIndex = null;
  }
}