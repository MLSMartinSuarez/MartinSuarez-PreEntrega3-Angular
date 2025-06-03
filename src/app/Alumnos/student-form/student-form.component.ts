import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  alumnoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
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
      this.alumnoForm.reset();
    }
  }
}
