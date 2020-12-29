import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_ROUTES_CONSTANTS } from 'src/app/core/constants/page-routes';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  onBeginningAuthentication(): void {
  }

  onSuccessfulAuthentication(): void {
    this.router.navigate([PAGE_ROUTES_CONSTANTS.DASHBOARD]);
  }
}
