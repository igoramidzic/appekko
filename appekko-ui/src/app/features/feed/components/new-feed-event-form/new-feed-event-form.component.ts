import { Component, OnInit } from '@angular/core';
import { EFeedEventType } from '../../enums/feed';
import { AuthService } from '../../../../core/services/auth.service';
import { IFeedEvent } from '../../models/feed-event';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../../../shared/auth/auth-modal/auth-modal.component';
import { EAuthFormToDisplay } from 'src/app/shared/auth/auth-modal/enums';
import { AddProjectModalComponent } from '../../../../shared/project/add-project-modal/add-project-modal.component';
import { IProject } from 'src/app/core/models/project.model';
import { ModalService } from 'src/app/core/services/modal.service';
import { EModalSizes } from 'src/app/core/enums/modal';

@Component({
  selector: 'app-new-feed-event-form',
  templateUrl: './new-feed-event-form.component.html',
  styleUrls: ['./new-feed-event-form.component.scss']
})
export class NewFeedEventFormComponent implements OnInit {

  EFeedEventType = EFeedEventType;

  constructor(private auth: AuthService, private dialog: MatDialog, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  async onCreateNewEvent(eventType: EFeedEventType): Promise<void> {
    try {
      await this.ensureAuthentication();
    } catch {
      console.log("Unauthenticated");
    }

    if (!this.auth.isAuthenticated) return;

    try {
      let feedEvent = await this.createEvent(eventType);
      console.log(feedEvent);
    } catch {
      console.log("Something went wrong creating the event");
    }
  }

  async ensureAuthentication(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.auth.isAuthenticated) return resolve(true);

      const dialogRef = this.dialog.open(AuthModalComponent, {
        data: {
          currentForm: EAuthFormToDisplay.Register,
          preventSwitchingForms: true
        },
        maxWidth: '400px',
        width: '100%'
      });

      dialogRef.afterClosed().subscribe(result => {
        return result ? resolve(true) : resolve(false);
      });
    })
  }

  async createEvent(eventType: EFeedEventType): Promise<IFeedEvent | any> {
    return this.openAddProjectModal();
  }

  async openAddProjectModal(): Promise<IProject> {
    return this.modalService.openModal(AddProjectModalComponent, {
      size: EModalSizes.MEDIUM
    });
  }
}
