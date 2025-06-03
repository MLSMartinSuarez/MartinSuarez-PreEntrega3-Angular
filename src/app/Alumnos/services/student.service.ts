import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './../modelos';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
    students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students = [...this.students, student]; // spread operator
  }

  removeStudent(index: number): void {
    this.students = this.students.filter((_, i) => i !== index); // spread operator
  }
}