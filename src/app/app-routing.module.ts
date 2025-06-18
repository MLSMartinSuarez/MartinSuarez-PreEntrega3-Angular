import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCoursesComponent } from './Alumnos/student-courses/student-courses.component';
import { authenticationGuard } from './core/guards/authentication.guard';
import { HomeComponent } from './Alumnos/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'cursos',
    component: StudentCoursesComponent,
    canActivate: [authenticationGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
