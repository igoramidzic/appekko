import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleAuthButtonComponent } from './forms/google-auth-button/google-auth-button.component';
import { ContentNavbarComponent } from './navbars/content-navbar/content-navbar.component';
import { MomentModule } from 'ngx-moment';
import { FlagComponent } from './flag/flag.component';
import { NgPipesModule } from 'ngx-pipes';
import { MainSpinnerComponent } from './spinners/main-spinner/main-spinner.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MomentModule,
        NgPipesModule,
    ],
    declarations: [
        GoogleAuthButtonComponent,
        ContentNavbarComponent,
        FlagComponent,
        MainSpinnerComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GoogleAuthButtonComponent,
        ContentNavbarComponent,
        MomentModule,
        FlagComponent,
        NgPipesModule,
        MainSpinnerComponent
    ],
})
export class SharedModule { }
