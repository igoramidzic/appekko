import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IModalConfig } from '../models/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal<T>(component: any, modalConfig: IModalConfig): Promise<T> {
    const { size, autoFocus, closeOnNavigation, data, disableClose, hasBackdrop, position } = modalConfig;
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(component, {
        autoFocus: autoFocus || true,
        closeOnNavigation: closeOnNavigation || true,
        width: '100%',
        maxWidth: size,
        maxHeight: '98vh',
        data: data,
        disableClose: disableClose || false,
        hasBackdrop: hasBackdrop || true,
        position: position
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    })
  }
}
