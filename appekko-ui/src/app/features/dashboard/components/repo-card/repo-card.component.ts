import { Component, Input, OnInit } from '@angular/core';
import { IGithubRepositoryResponce } from '../../../../core/models/github/repository';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() repo: IGithubRepositoryResponce;

  constructor() { }

  ngOnInit(): void {
  }

}
