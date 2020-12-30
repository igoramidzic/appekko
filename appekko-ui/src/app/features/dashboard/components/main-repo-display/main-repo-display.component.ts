import { Component, Input, OnInit } from '@angular/core';
import { IGithubRepositoryResponce } from '../../../../core/models/github/repository';

@Component({
  selector: 'app-main-repo-display',
  templateUrl: './main-repo-display.component.html',
  styleUrls: ['./main-repo-display.component.scss']
})
export class MainRepoDisplayComponent implements OnInit {

  @Input() repo: IGithubRepositoryResponce;

  constructor() { }

  ngOnInit(): void {
  }

}
