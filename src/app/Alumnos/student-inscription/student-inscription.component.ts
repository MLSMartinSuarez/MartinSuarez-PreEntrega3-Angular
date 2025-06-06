import { Component} from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../modelos'; // Asegúrate de que la ruta sea correcta
import { DoCheck } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';



@Component({
  selector: 'app-student-inscription',
  standalone: false,
  templateUrl: './student-inscription.component.html',
  styleUrl: './student-inscription.component.css'
})
export class StudentInscriptionComponent implements DoCheck{
  displayedColumns: string[] = ['nombre', 'apellido', 'curso', 'acciones'];
  inscripciones: Student[] = [];

  constructor(private studentService: StudentService,public auth: AuthService) {
    this.loadStudents();
  }

  ngDoCheck() {
    this.inscripciones = this.studentService.getStudents();
  }

  loadStudents() {
    this.inscripciones = this.studentService.getStudents();
  }

  eliminarAlumno(index: number) {
    this.studentService.removeStudent(index);
    this.loadStudents();
  }
}