import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormModule } from './Alumnos/student-form/student-form.module';
import { StudentCoursesModule } from './Alumnos/student-courses/student-courses.module';
import { StudentInscriptionModule } from './Alumnos/student-inscription/student-inscription.module';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentFormModule,
    StudentCoursesModule,
    StudentInscriptionModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
