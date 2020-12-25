import { Component, OnInit } from '@angular/core';
import { PAGE_ROUTES_CONSTANTS } from '../../../../core/constants/page-routes';

@Component({
  selector: 'app-profile-unauthenticated',
  templateUrl: './profile-unauthenticated.component.html',
  styleUrls: ['./profile-unauthenticated.component.scss']
})
export class ProfileUnauthenticatedComponent implements OnInit {

  PAGE_ROUTES_CONSTANTS = PAGE_ROUTES_CONSTANTS;

  constructor() { }

  ngOnInit(): void {
  }

}
