import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/Services/auth.service';

export const userGuard: CanActivateFn = (state) => {
  const route = inject(Router);
  const authService= inject(AuthService);

  const token = localStorage.getItem('userToken');
  const role  = localStorage.getItem('role')

  if(token !== null && role == 'user')
  {
    return true
  } else
  {
    authService.getProfile();
    route.navigate(['/landingPage/home']);
    return false;
  }
};
