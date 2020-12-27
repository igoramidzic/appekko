import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EFirebaseAuthErrorCode } from 'src/app/core/constants/firebase';
import { PAGE_ROUTES_CONSTANTS } from 'src/app/core/constants/page-routes';
import { AuthService } from 'src/app/core/services/auth.service';
import { EAuthFormToDisplay } from '../enums';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() showLinkToRegister: boolean;
  @Output() successfulAuthentication: EventEmitter<null> = new EventEmitter();
  @Output() switchForm: EventEmitter<EAuthFormToDisplay> = new EventEmitter();

  hasError: boolean;
  errorMessage: string;

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.hasError = false;
    this.errorMessage = "";

    this.form = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onBeginningGoogleAuthentication(): void {
  }

  onSuccessfulGoogleAuthenticated(): void {
    this.successfulAuthentication.emit();
  }

  async onFormSubmit(): Promise<void> {
    this.hasError = false;
    this.errorMessage = "";
    if (this.form.invalid) return;
    this.form.disable();

    const { email, password } = this.form.value;

    try {
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      this.hasError = true;
      this.errorMessage = this.getErrorMessage(e.code);
    }

    this.form.enable();
  }

  getErrorMessage(code: EFirebaseAuthErrorCode): string {
    switch (code) {
      case EFirebaseAuthErrorCode.INVALID_EMAIL:
      case EFirebaseAuthErrorCode.INVALID_PASSWORD:
      case EFirebaseAuthErrorCode.WRONG_PASSWORD:
        return 'Incorrect email or password.';
      default:
        return 'Something went wrong. Please try again.';
    }
  }

  onGoToRegisterForm(): void {
    this.switchForm.emit(EAuthFormToDisplay.Register);
  }
}
