import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagePath } from 'src/app/core/utils/asset-helper';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-google-auth-button',
  templateUrl: './google-auth-button.component.html',
  styleUrls: ['./google-auth-button.component.scss']
})
export class GoogleAuthButtonComponent implements OnInit {

  ImagePath = ImagePath;

  @Output() beginningAuthentication: EventEmitter<null> = new EventEmitter();
  @Output() successfulAuthenticated: EventEmitter<null> = new EventEmitter();
  @Output() unSuccessfulAuthentication: EventEmitter<null> = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmitForm(): Promise<void> {
    this.beginningAuthentication.emit();
    await this.auth.signInWithGoogle();
    this.successfulAuthenticated.emit()
  }
}
