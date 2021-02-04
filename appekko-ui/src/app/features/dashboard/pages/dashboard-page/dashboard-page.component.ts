import { Component, OnInit } from '@angular/core';
import { EGithubQueryOrderDirection } from 'src/app/core/enums/github/orderDirection';
import { EGithubRepositorySortBy } from 'src/app/core/enums/github/repository';
import { ETechnologyLanguage } from 'src/app/core/enums/languages';
import { IGithubRepositoryResponce, IGithubRepositoryQuery } from '../../../../core/models/github/repository';
import { GithubService } from '../../../../core/services/github.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  query: IGithubRepositoryQuery;
  repos: IGithubRepositoryResponce[];

  constructor(private githubService: GithubService) {
    this.query = {
      topic: undefined,
      language: ETechnologyLanguage.TYPESCRIPT,
      sort: {
        by: EGithubRepositorySortBy.STARS,
        order: EGithubQueryOrderDirection.DESCENDING
      },
      pagination: {
        page: 1,
        perPage: 10
      }
    }
  }

  ngOnInit(): void {
    this.githubService.getRepositories(this.query)
      .then(repos => this.repos = repos);
  }

  onNewRepos(repos: IGithubRepositoryResponce[]): void {
    this.repos = repos;
  }

  newQuery(query: IGithubRepositoryQuery): void {
    this.query = query;
  }
}
