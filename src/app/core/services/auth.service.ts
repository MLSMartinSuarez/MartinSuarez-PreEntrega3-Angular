import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER = { username: 'admin', password: 'admin123' };

  login(username: string, password: string): boolean {
    if (username === this.USER.username && password === this.USER.password) {
      localStorage.setItem(this.TOKEN_KEY, 'token123');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}