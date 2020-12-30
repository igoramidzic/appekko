import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ScreenerComponent } from './components/screener/screener.component';
import { MainRepoDisplayComponent } from './components/main-repo-display/main-repo-display.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';

@NgModule({
  declarations: [
  DashboardComponent,
  DashboardPageComponent,
  ScreenerComponent,
  MainRepoDisplayComponent,
  RepoCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  exports: [
  ],
  providers: [],
})
export class DashboardModule { }
