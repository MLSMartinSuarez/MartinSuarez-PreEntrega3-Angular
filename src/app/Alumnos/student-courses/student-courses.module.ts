import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StudentCoursesComponent } from './student-courses.component';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [StudentCoursesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NavBarModule
  ],
  exports: [StudentCoursesComponent],
})
export class StudentCoursesModule {}
