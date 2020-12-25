import { Routes } from '@angular/router';
import { RegisterPageComponent } from 'src/app/features/register/pages/register-page/register-page.component';
import { RegisterComponent } from './register.component';

export const REGISTER_ROUTES: Routes = [
    {
        path: '',
        component: RegisterComponent,
        children: [
            {
                path: '',
                component: RegisterPageComponent
            }
        ]
    }
];
