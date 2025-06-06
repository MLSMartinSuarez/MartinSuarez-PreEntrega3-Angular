import { Injectable } from '@angular/core';
import { Users } from '../../Alumnos/modelos/index';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  USER: Users = {
    id: 1,
    username: 'martin',
    email: 'martin@gmail.com',
    password: 'coder',
    role: 'administrator',
    token: 'tokenCoder',
  };

  login(username: string, password: string): void {
    this.http
      .get<Users[]>(
        `http://localhost:3000/users?username=${username}&password=${password}`
      )
      .subscribe({
        next: (response) => {
          const user = response[0];
          if (user) {
            localStorage.setItem('token', user.token);
            this.router.navigate(['home']);
            console.log('Login successful:', user);
          } else {
            console.error('Login failed: Invalid username or password');
          }
        },
      });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  verifyToken(): Observable<Users | boolean> {
    const token = localStorage.getItem('token');
    return this.http.get<Users[]>(`http://localhost:3000/users?token=${token}`)
    .pipe(
      map ((response) => {
        const user = response[0];
        if (user) {
          return user;
        } else {
          return false; 
        }
      })
    )
  }
}
