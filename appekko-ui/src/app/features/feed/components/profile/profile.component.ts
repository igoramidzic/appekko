import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { ImagePath } from '../../../../core/utils/asset-helper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ImagePath = ImagePath;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.auth.logout();
  }
}
