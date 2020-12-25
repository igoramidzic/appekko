import { Component, OnInit } from '@angular/core';
import { ImagePath } from '../../utils/asset-helper';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  ImagePath = ImagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
