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
    if(!this.pciFormData.year){
      console.error('Year is required');
    } else{
      console.log(JSON.stringify(this.pciFormData));
      this.pciFormService.invokePciFormService(this.pciFormData).subscribe( error => console.log(error));
    }
  }
}
