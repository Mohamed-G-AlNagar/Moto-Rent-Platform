import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let token:any = localStorage.getItem('adminToken')
  if(!req.url.includes('/users/login'))
  {
    let updatedRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }

    })
    return next(updatedRequest)

  } else {
    return next(req);
  }
};
