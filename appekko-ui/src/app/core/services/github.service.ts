import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGithubRepositoryQuery, IGithubRepositoryResponce } from '../models/github/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  lastQuery: IGithubRepositoryQuery;

  constructor(private http: HttpClient) { }

  getRepositories(query: IGithubRepositoryQuery): Promise<IGithubRepositoryResponce[]> {
    this.lastQuery = query;
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.buildRepositoriesQuery(query))
        .subscribe(res => { resolve(res.items) }, err => console.log(err));
    })
  }

  private buildRepositoriesQuery(query: IGithubRepositoryQuery): string {
    const { topic, language, sort, pagination } = query;
    let url: string = "https://api.github.com/search/repositories?";

    url += 'q=' + (topic ? topic : '');
    url += '+language:' + (language ? language : '');

    if (sort) {
      url += '&sort=' + sort.by;
      url += '&order=' + sort.order;
    }

    if (pagination) {
      url += '&page=' + pagination.page
      url += '&per_page=' + pagination.perPage
    }

    return url;
  }
}