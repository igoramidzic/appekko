import { Component, Input, OnInit } from '@angular/core';
import { EFlagSizes, EFlagTypes } from 'src/app/core/enums/flags';
import { IProject } from '../../../../../core/models/project.model';

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
