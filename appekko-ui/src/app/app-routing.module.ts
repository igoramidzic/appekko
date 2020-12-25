import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGE_ROUTES_CONSTANTS } from './core/constants/page-routes';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGE_ROUTES_CONSTANTS.FEED,
    pathMatch: 'full'
  },
  {
    path: PAGE_ROUTES_CONSTANTS.FEED,
    loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: PAGE_ROUTES_CONSTANTS.LOGIN,
    canActivate: [UnauthGuard],
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: PAGE_ROUTES_CONSTANTS.REGISTER,
    canActivate: [UnauthGuard],
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
