import { Component } from '@angular/core';


@Component({
  selector: 'app-student-inscription',
  standalone: false,
  templateUrl: './student-inscription.component.html',
  styleUrl: './student-inscription.component.css'
})
export class StudentInscriptionComponent {
   displayedColumns: string[] = ['nombre', 'curso'];
  inscripciones = [
    { nombre: 'Juan', curso: 'Angular' },
    { nombre: 'Ana', curso: 'React' }
  ];
}
