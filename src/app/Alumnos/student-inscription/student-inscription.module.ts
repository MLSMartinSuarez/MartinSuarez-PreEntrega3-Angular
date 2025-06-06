import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInscriptionComponent } from './student-inscription.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [
    CommonModule
    , MatTableModule,
    MatIconModule
  ],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule { }