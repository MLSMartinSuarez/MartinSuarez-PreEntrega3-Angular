import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  alumnoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumnoData = this.alumnoForm.value;
      console.log('Alumno inscrito:', alumnoData);
      // Aquí puedes agregar lógica para guardar el alumno o emitir un evento
      this.alumnoForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }
}
