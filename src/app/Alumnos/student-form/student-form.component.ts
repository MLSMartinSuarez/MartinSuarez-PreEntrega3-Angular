import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos';
import { AuthService } from '../../core/services/auth.service';
import { CursosService } from '../../core/services/courses.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  alumnoForm: FormGroup;
  inscripto: any = null;
  cursos: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    public auth: AuthService,
    private cursosService: CursosService
  ) {
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });

    this.cursos = this.cursosService.getCursos();

    this.auth.authUser$.subscribe(user => {
      if (user && user.role === 'alumno') {
        const inscripcion = this.studentService.getStudents().find(
          student => student.nombre === user.username
        );
        if (inscripcion) {
          this.inscripto = inscripcion;
        }
      }
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumnoData: Student = {
        nombre: this.alumnoForm.value.nombre,
        apellido: this.alumnoForm.value.apellido,
        curso: this.alumnoForm.value.curso
      };
      this.studentService.addStudent(alumnoData);
      this.inscripto = alumnoData;
      this.alumnoForm.reset();
    }
  }
}
