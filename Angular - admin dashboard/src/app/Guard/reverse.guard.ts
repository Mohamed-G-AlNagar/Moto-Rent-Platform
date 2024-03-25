import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const reverseGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let loggedAdmin = localStorage.getItem('adminToken');
  if (loggedAdmin) {
    let decode = jwtDecode(loggedAdmin);
    if (decode && typeof decode === 'object' && 'role' in decode && decode.role === "admin") {
      router.navigate(['/dashboard']);
      return false;
    }
  }
  return true;
}

