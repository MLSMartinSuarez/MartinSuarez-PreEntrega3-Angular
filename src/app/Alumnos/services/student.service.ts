import { Injectable } from '@angular/core';
import { Student } from './../modelos';

@Injectable({
  providedIn: 'root',
})
export class StudentService {  students: Student[] = [
    { name: 'Facundo', lastname: 'Caceres', course: 'Angular' },
    { name: 'Hernan', lastname: 'Lorenzo', course: 'Vue' },
    { name: 'Carlos', lastname: 'Gao', course: 'Angular' },
    { name: 'Arian', lastname: 'Girardi', course: 'React ' },
    { name: 'Natalia', lastname: 'Martinez', course: 'React' },
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students = [...this.students, student];
  }
  removeStudent(index: number): void {
    this.students = this.students.filter((student, currentIndex) => currentIndex !== index);
  }

  updateStudent(index: number, student: Student): void {
    this.students = this.students.map((currentStudent, currentIndex) => (currentIndex === index ? student : currentStudent));
  }
}
