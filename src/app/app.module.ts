import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormModule } from './Alumnos/student-form/student-form.module';
import { StudentCoursesModule } from './Alumnos/student-courses/student-courses.module';
import { StudentInscriptionModule } from './Alumnos/student-inscription/student-inscription.module';
import { NavBarComponent } from './Alumnos/components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentFormModule,
    StudentCoursesModule,
    StudentInscriptionModule,
    MatToolbarModule,
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
