import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInscriptionComponent } from './student-inscription.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [
    CommonModule
    , MatTableModule
  ],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule { }