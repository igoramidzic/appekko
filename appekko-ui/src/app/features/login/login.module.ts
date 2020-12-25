import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent,
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(LOGIN_ROUTES),
    ],
    exports: [
    ],
    providers: [],
})
export class LoginModule { }
