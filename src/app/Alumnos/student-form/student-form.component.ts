import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos'; // Asegúrate de que la ruta sea correcta
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  alumnoForm: FormGroup;
   inscripto: any = null; 

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, public auth: AuthService) {
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });

    this.auth.authUser$.subscribe(user => {
      if (user && user.role === 'alumno') {
        // Busca si el alumno ya está inscripto
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
