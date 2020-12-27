import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EAuthFormToDisplay } from './enums';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  EAuthFormToDisplay = EAuthFormToDisplay;

  constructor(public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  ngOnInit(): void {
  }

  onSuccessfulAuthentication(): void {
    this.dialogRef.close(true)
  }

  onSwitchForm(form: EAuthFormToDisplay): void {
    this.data.currentForm = form;
  }
}

interface ModalData {
  currentForm: EAuthFormToDisplay;
  preventSwitchingForms: boolean;
}