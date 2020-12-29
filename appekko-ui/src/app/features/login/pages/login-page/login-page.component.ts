import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_ROUTES_CONSTANTS } from 'src/app/core/constants/page-routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBeginningAuthentication(): void {
  }

  onSuccessfulAuthenticated(): void {
    this.router.navigate([PAGE_ROUTES_CONSTANTS.DASHBOARD]);
  }

}
