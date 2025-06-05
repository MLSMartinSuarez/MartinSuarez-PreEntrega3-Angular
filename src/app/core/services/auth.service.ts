import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER = { username: 'martin', password: 'coder' };

  login(username: string, password: string): boolean {
    if (username === this.USER.username && password === this.USER.password) {
      localStorage.setItem(this.TOKEN_KEY, 'tokenCoder');
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