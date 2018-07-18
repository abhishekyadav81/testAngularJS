import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ViewChild } from '@angular/core';

import { PciFormService } from '../../service/pciform.service';
import {PciFormData} from '../../model/pciformdata'
import {ConfirmationDialog} from './confirmationdialog'

export interface DialogData {
  updateAvailable : Boolean;
}

@Component({
  selector: 'app-pciform1',
  templateUrl: './pciform1.component.html',
  styleUrls: ['./pciform1.component.css']
})
export class PciForm1Component implements OnInit {
  @ViewChild('pciForm1') mytemplateForm : NgForm;

  pciFormData = new PciFormData();

  constructor(private pciFormService : PciFormService, public  dialog: MatDialog) { }

  ngOnInit() {

  }

  onSubmit() {
    if(this.pciFormData.type ==='crop'){
      this.pciFormData.productId='';
    } else if (this.pciFormData.type ==='material'){
      this.pciFormData.specieId='';
      this.pciFormData.acronymName='';
    }

   console.log(JSON.stringify(this.pciFormData));
   this.pciFormService.invokePciFormService(this.pciFormData)
      .subscribe( result => {console.log("success , message id is " +result.messageId),this.pciFormData.success=true,
      this.mytemplateForm.resetForm(),
      this.dialog.open(ConfirmationDialog,{
        data: {updateAvailable: result.updateAvailable}}),
      setTimeout(() => {this.pciFormData.success=false}, 3000);},
        error =>{ console.log("Error"), this.pciFormData.success=false});
    }
  }

