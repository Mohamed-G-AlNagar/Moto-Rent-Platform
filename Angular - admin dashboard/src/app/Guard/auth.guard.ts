import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let loggedAdmin = localStorage.getItem('adminToken');
  if (loggedAdmin) {
    let decode = jwtDecode(loggedAdmin);
    if (decode && typeof decode === 'object' && 'role' in decode && decode.role === "admin") {
          return true
    } else {
      alert("its Only For Admin")
      router.navigate([''])
      return false
    }
  } else {
    alert('Please Login First')
    router.navigate([''])
    return false;
  }
};
