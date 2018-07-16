import { Component, OnInit, Inject } from '@angular/core';
import { PciFormService } from '../../service/pciform.service';
import {PciFormData} from '../../model/pciformdata'
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation-dialog.html',
  })
  export class ConfirmationDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ConfirmationDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }