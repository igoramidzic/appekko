import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleAuthButtonComponent } from './forms/google-auth-button/google-auth-button.component';
import { ContentNavbarComponent } from './navbars/content-navbar/content-navbar.component';
import { MomentModule } from 'ngx-moment';
import { FlagComponent } from './flag/flag.component';
import { NgPipesModule } from 'ngx-pipes';
import { MainSpinnerComponent } from './spinners/main-spinner/main-spinner.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { LoginFormComponent } from './auth/auth-modal/login-form/login-form.component';
import { RegisterFormComponent } from './auth/auth-modal/register-form/register-form.component';
import { AddProjectModalComponent } from './project/add-project-modal/add-project-modal.component';
import { AddProjectFormComponent } from './forms/add-project-form/add-project-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThousandSuffixesPipe } from '../core/pipes/thousand-suff.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MomentModule,
        NgPipesModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        GoogleAuthButtonComponent,
        ContentNavbarComponent,
        FlagComponent,
        MainSpinnerComponent,
        AuthModalComponent,
        LoginFormComponent,
        RegisterFormComponent,
        AddProjectModalComponent,
        AddProjectFormComponent,
        ThousandSuffixesPipe
    ],
    exports: [
        CommonModule,
        GoogleAuthButtonComponent,
        ContentNavbarComponent,
        MomentModule,
        FlagComponent,
        NgPipesModule,
        MainSpinnerComponent,
        AuthModalComponent,
        AddProjectFormComponent,
        FormsModule,
        ReactiveFormsModule,
        ThousandSuffixesPipe
    ],
})
export class SharedModule { }
