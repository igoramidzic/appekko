import { Component, Input, OnInit } from '@angular/core';
import { IGithubRepositoryQuery } from '../../../../core/models/github/repository';

@Component({
  selector: 'app-query-displayer',
  templateUrl: './query-displayer.component.html',
  styleUrls: ['./query-displayer.component.scss']
})
export class QueryDisplayerComponent implements OnInit {

  @Input() query: IGithubRepositoryQuery;

  constructor() { }

  ngOnInit(): void {
  }

}
