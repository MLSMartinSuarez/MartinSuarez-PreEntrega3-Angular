import { Injectable } from '@angular/core';
import { Student } from './../modelos';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students = [...this.students, student];
  }

  removeStudent(index: number): void {
    this.students = this.students.filter((iterador, i) => i !== index);
  }
}
