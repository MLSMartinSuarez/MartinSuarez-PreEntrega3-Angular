import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos';
import { DoCheck } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursosService } from '../../core/services/courses.service';

@Component({
  selector: 'app-student-inscription',
  standalone: false,
  templateUrl: './student-inscription.component.html',
  styleUrl: './student-inscription.component.css'
})
export class StudentInscriptionComponent implements DoCheck {
  displayedColumns: string[] = ['nombre', 'apellido', 'curso', 'acciones'];
  inscripciones: Student[] = [];
  editIndex: number | null = null;
  editForm: FormGroup;
  cursos: string[] = [];

  constructor(
    private studentService: StudentService,
    public auth: AuthService,
    private fb: FormBuilder,
    private cursosService: CursosService
  ) {
    this.loadStudents();
    this.editForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      curso: ['']
    });
    this.cursos = this.cursosService.getCursos();
  }

  ngDoCheck() {
    this.inscripciones = this.studentService.getStudents();
    this.cursos = this.cursosService.getCursos();
  }

  loadStudents() {
    this.inscripciones = this.studentService.getStudents();
  }

  eliminarAlumno(index: number) {
    this.studentService.removeStudent(index);
    this.loadStudents();
  }

  editarAlumno(index: number) {
    this.editIndex = index;
    const alumno = this.inscripciones[index];
    this.editForm.setValue({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      curso: alumno.curso
    });
  }

  guardarEdicion() {
    if (this.editForm.valid && this.editIndex !== null) {
      this.studentService.updateStudent(this.editIndex, this.editForm.value);
      this.editIndex = null;
      this.loadStudents();
    }
  }

  cancelarEdicion() {
    this.editIndex = null;
  }
}