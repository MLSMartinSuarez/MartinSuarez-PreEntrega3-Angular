import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CursosService } from '../../core/services/courses.service';

@Component({
  selector: 'app-student-courses',
  standalone: false,
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent {
  cursos: string[] = [];
  nuevoCurso = '';
  editIndex: number | null = null;
  editCurso = '';

  constructor(public auth: AuthService, private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }

  onNuevoCursoInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nuevoCurso = input.value;
  }

  onEditCursoInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editCurso = input.value;
  }

  agregarCurso() {
    if (this.nuevoCurso.trim()) {
      this.cursosService.addCursos(this.nuevoCurso.trim());
      this.cursos = this.cursosService.getCursos();
      this.nuevoCurso = '';
    }
  }

  editarCurso(index: number) {
    this.editIndex = index;
    this.editCurso = this.cursos[index];
  }

  guardarCurso(index: number) {
    if (this.editCurso.trim()) {
      this.cursosService.updateCursos(index, this.editCurso.trim());
      this.cursos = this.cursosService.getCursos();
      this.editIndex = null;
      this.editCurso = '';
    }
  }

  cancelarEdicion() {
    this.editIndex = null;
    this.editCurso = '';
  }
}
