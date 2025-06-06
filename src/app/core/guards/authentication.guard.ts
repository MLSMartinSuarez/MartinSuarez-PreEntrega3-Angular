import { CanActivateFn } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.verifyToken()) {
    console.log('User is authenticated - Guard passed');
    return true;
  } else {
    console.log('User is not authenticated - Guard blocked');
    router.navigate(['login']);
    return false;
  }
};
