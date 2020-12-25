import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const NOT_FOUND_ROUTES: Routes = [
    {
        path: '',
        component: NotFoundComponent,
        children: [
            {
                path: '',
                component: NotFoundPageComponent
            }
        ]
    }
];
