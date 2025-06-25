import { Injectable } from '@angular/core';
import { Users } from '../../Alumnos/modelos/index';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<Users | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}
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
            this._authUser$.next(user);
          }
        },
      });
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
          localStorage.setItem('token', user.token);
          this._authUser$.next(user);
          return user;
        } else {
          return false; 
        }
      })
    )
  }
  logout(): void {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['login']);
  }
}
