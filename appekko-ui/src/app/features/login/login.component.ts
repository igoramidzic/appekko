import { Component, OnInit } from '@angular/core';
import { PAGE_ROUTES_CONSTANTS } from 'src/app/core/constants/page-routes';
import { ImagePath } from 'src/app/core/utils/asset-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  PAGE_ROUTES_CONSTANTS = PAGE_ROUTES_CONSTANTS;
  ImagePath = ImagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
