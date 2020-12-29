import { Component, OnInit } from '@angular/core';
import { IGithubRepositoryResponce } from '../../../../core/models/github/repository';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  repos: IGithubRepositoryResponce[];

  constructor() { }

  ngOnInit(): void {
  }

  onNewRepos(repos: IGithubRepositoryResponce[]): void {
    this.repos = repos;
  }
}
