import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  resolve() {
    this.router.navigate(['/dashboard']);
  }
}
