import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EFirebaseAuthErrorCode } from 'src/app/core/constants/firebase';
import { ERepositoryPlatform } from 'src/app/core/enums/repositoryPlatforms';
import { IProject } from 'src/app/core/models/project.model';
// import { serverTimestamp } from 'src/app/core/utils/timestamp';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent implements OnInit {

  hasError: boolean;
  errorMessage: string;

  form: FormGroup;

  @Output() successfulCreateProject: EventEmitter<IProject> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.hasError = false;
    this.errorMessage = "";

    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      category: new FormControl(null, [Validators.required]),
      technologies: new FormControl([], [Validators.required]),
      repositoryURL: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  async onFormSubmit(): Promise<void> {
    this.hasError = false;
    this.errorMessage = "";
    if (this.form.invalid) return;
    this.form.disable();

    const { name, description, category, technologies, repositoryURL } = this.form.value;

    let project = {
      name,
      description,
      category,
      technologies,
      repository: {
        platform: ERepositoryPlatform.Github,
        url: repositoryURL
      },
      author: {
        uid: 'sample',
        email: 'amidzicigor46@gmail.com',
        displayName: 'Igor Amidzic',
      },
      created: new Date(),
      updated: new Date()
    }

    try {
      this.successfulCreateProject.emit(project);
    } catch (e) {
      this.hasError = true;
      this.errorMessage = this.getErrorMessage(e.code);
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

  get showProjectNameError(): boolean {
    let control = this.form.controls['name'];
    return control.invalid;
  }

  get showCategoryError(): boolean {
    let control = this.form.controls['category'];
    return control.invalid;
  }

  get showTechnologiesError(): boolean {
    let control = this.form.controls['technologies'];
    return control.invalid;
  }

  get showRepositoryURLError(): boolean {
    let control = this.form.controls['repositoryURL'];
    return control.invalid;
  }
}
