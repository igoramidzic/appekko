import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: DashboardPageComponent
            }
        ]
    }
];
