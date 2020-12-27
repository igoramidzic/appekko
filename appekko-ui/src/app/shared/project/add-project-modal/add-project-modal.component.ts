import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IProject } from 'src/app/core/models/project.model';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  project: IProject;

  constructor(public dialogRef: MatDialogRef<AddProjectModalComponent>) { }

  ngOnInit(): void {
  }

  onSuccessfulCreateProject(project: IProject): void {
    this.project = project;
    setTimeout(() => {
      this.dialogRef.close(project);
    }, 3000);
  }
}
