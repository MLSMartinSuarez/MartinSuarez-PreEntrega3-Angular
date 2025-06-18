import { Injectable } from '@angular/core';
import { Student } from './../modelos';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    { nombre: 'Facundo', apellido: 'Caceres', curso: 'Angular' },
    { nombre: 'Hernan', apellido: 'Lorenzo', curso: 'Vue' },
    { nombre: 'Carlos', apellido: 'Gao', curso: 'Angular' },
    { nombre: 'Arian', apellido: 'Girardi', curso: 'React ' },
    { nombre: 'Natalia', apellido: 'Martinez', curso: 'React' },
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students = [...this.students, student];
  }

  removeStudent(index: number): void {
    this.students = this.students.filter((_, i) => i !== index);
  }

  updateStudent(index: number, student: Student): void {
    this.students = this.students.map((s, i) => (i === index ? student : s));
  }
}
