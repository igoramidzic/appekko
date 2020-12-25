import { Component, OnInit } from '@angular/core';
import { PAGE_ROUTES_CONSTANTS } from '../../../core/constants/page-routes';
import { ImagePath } from '../../../core/utils/asset-helper';

@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss']
})
export class ContentNavbarComponent implements OnInit {

  PAGE_ROUTES_CONSTANTS = PAGE_ROUTES_CONSTANTS;
  ImagePath = ImagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
