import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../../../../core/models/user.model';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  @Input() author: IUser;
  @Input() created: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
