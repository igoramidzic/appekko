import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { PAGE_ROUTES_CONSTANTS } from '../constants/page-routes';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !user),
      tap(unauthenticated => {
        if (!unauthenticated)
          this.router.navigate([PAGE_ROUTES_CONSTANTS.FEED]);
      })
    )
  }

}
