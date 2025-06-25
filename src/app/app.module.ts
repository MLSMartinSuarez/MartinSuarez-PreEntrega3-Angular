import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormModule } from './Alumnos/student-form/student-form.module';
import { StudentCoursesModule } from './Alumnos/student-courses/student-courses.module';
import { StudentInscriptionModule } from './Alumnos/student-inscription/student-inscription.module';
import { NavBarModule } from './Alumnos/components/nav-bar/nav-bar.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './Alumnos/home/home.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store';

@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentFormModule,
    StudentCoursesModule,
    StudentInscriptionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,  
    NavBarModule,
    HomeModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    
],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
