import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../../../core/models/project.model';
import { EFlagTypes, EFlagSizes } from '../../../../../../../../ui-web/src/core/enums/flags';

@Component({
  selector: 'app-feed-project',
  templateUrl: './feed-project.component.html',
  styleUrls: ['./feed-project.component.scss']
})
export class FeedProjectComponent implements OnInit {

  @Input() project: IProject;

  EFlagTypes = EFlagTypes;
  EFlagSizes = EFlagSizes;

  constructor() { }

  ngOnInit(): void {
  }
}
