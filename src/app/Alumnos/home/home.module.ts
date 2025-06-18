import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StudentCoursesModule } from '../student-courses/student-courses.module';
import { StudentFormModule } from '../student-form/student-form.module';
import { StudentInscriptionModule } from '../student-inscription/student-inscription.module';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StudentCoursesModule,
    StudentFormModule,
    StudentInscriptionModule,
    NavBarModule
  ],
  exports: [],
})
export class HomeModule {}
