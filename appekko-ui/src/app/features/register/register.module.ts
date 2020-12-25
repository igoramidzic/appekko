import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { REGISTER_ROUTES } from './register.routes';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
    declarations: [
        RegisterComponent,
        RegisterPageComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(REGISTER_ROUTES),
    ],
    exports: [
    ],
    providers: [],
})
export class RegisterModule { }
