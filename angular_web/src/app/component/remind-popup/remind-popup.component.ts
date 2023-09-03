import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface RemindPopupData {
  remindText: '';
  btnText: '';
  clickFunc: () => {};
}

@Component({
  selector: 'app-remind-popup',
  templateUrl: './remind-popup.component.html',
  styleUrls: ['./remind-popup.component.css'],
})
export class RemindPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<RemindPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemindPopupData
  ) {
    dialogRef.disableClose = true;
  }
}
