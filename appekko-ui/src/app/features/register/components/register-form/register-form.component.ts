import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EFirebaseAuthErrorCode } from 'src/app/core/constants/firebase';
import { PAGE_ROUTES_CONSTANTS } from 'src/app/core/constants/page-routes';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  PAGE_ROUTES_CONSTANTS = PAGE_ROUTES_CONSTANTS;

  hasError: boolean;
  errorMessage: string;

  form: FormGroup;

  @Output() beginningAuthentication: EventEmitter<null> = new EventEmitter();
  @Output() successfulAuthenticated: EventEmitter<null> = new EventEmitter();
  @Output() unSuccessfulAuthentication: EventEmitter<null> = new EventEmitter();

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.hasError = false;
    this.errorMessage = "";

    this.form = this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
      ]),
    });
  }

  ngOnInit(): void {
  }

  async onFormSubmit(): Promise<void> {
    this.hasError = false;
    this.errorMessage = "";
    if (this.form.invalid) return;
    this.form.disable();
    this.beginningAuthentication.emit();

    const { fullName, email, password } = this.form.value;

    try {
      await this.auth.registerWithEmailAndPassword(fullName, email, password);
      this.successfulAuthenticated.emit();
    } catch (e) {
      this.hasError = true;
      this.errorMessage = this.getErrorMessage(e.code);
      this.unSuccessfulAuthentication.emit();
    }

    this.form.enable();
  }

  getErrorMessage(code: EFirebaseAuthErrorCode): string {
    switch (code) {
      case EFirebaseAuthErrorCode.EMAIL_ALREADY_EXISTS:
      case EFirebaseAuthErrorCode.EMAIL_ALREADY_IN_USE:
        return 'This email is already taken.';
      case EFirebaseAuthErrorCode.INVALID_EMAIL:
        return 'This email is invalid.';
      case EFirebaseAuthErrorCode.INVALID_PASSWORD:
        return 'This password is invalid.';
      case EFirebaseAuthErrorCode.WEAK_PASSWORD:
        return 'Password: 8+ characters, 1 number, 1 special character'
      default:
        return 'Something went wrong. Please try again.';
    }
  }

  get showFullNameError(): boolean {
    let control = this.form.controls['fullName'];
    return control.invalid;
  }

  get showEmailError(): boolean {
    let control = this.form.controls['email'];
    return control.invalid;
  }

  get showPasswordError(): boolean {
    let control = this.form.controls['password'];
    return control.invalid;
  }
}
