import { Injectable } from '@angular/core';
import { Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canLoad(route: Route): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }
}
