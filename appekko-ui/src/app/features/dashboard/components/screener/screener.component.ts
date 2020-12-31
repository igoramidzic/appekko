import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { IGithubRepositoryResponce, IGithubRepositoryQuery } from '../../../../core/models/github/repository';
import { EGithubRepositorySortBy } from 'src/app/core/enums/github/repository';
import { EGithubQueryOrderDirection } from 'src/app/core/enums/github/orderDirection';
import { ETechnologyLanguage } from 'src/app/core/enums/languages';
import { TechnologyLanguages } from '../../../../core/enums/languages';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.scss']
})
export class ScreenerComponent implements OnInit {

  query: IGithubRepositoryQuery;
  TechnologyLanguages = TechnologyLanguages;
  showLanguages: boolean;

  @Output() repos: EventEmitter<IGithubRepositoryResponce[]> = new EventEmitter();

  constructor(private githubService: GithubService) {
    this.showLanguages = true;
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
  }

  makeQuery(): void {
    this.showLanguages = false;
    this.githubService.getRepositories(this.query).then(repos => { this.repos.emit(repos) })
      .catch(err => console.log(err));
  }

  selectLanguage(language: ETechnologyLanguage): void {
    this.query.language = language;
  }

  languageIsSelected(language: ETechnologyLanguage): boolean {
    console.log()
    return language == this.query.language;
  }

}
