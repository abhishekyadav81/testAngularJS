import { Component, OnInit } from '@angular/core';
import { PciFormService } from '../../service/pciform.service';
import {PciFormData} from '../../model/pciformdata'

@Component({
  selector: 'app-pciform1',
  templateUrl: './pciform1.component.html',
  styleUrls: ['./pciform1.component.css']
})
export class PciForm1Component implements OnInit {


  pciFormData = new PciFormData();

  constructor(private pciFormService : PciFormService) { }

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
      .subscribe( data => {console.log("success , message id is " +data.messageId),this.pciFormData.success=true,setTimeout(() => {this.pciFormData.success=false}, 3000);},
        error =>{ console.log("Error"), this.pciFormData.success=false});
    }
  }

