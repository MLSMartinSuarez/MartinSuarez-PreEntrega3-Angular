import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { map } from 'rxjs/operators';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyToken().pipe(
    map(user => {
      const isAuthenticated = !!user;
      console.log(
        isAuthenticated
          ? 'Guard activado: usuario autenticado'
          : 'Guard activado: usuario NO autenticado'
      );
      if (!isAuthenticated) {
        router.navigate(['login']);
      }
      return isAuthenticated;
    })
  );
};
