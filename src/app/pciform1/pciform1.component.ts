import { Component, OnInit } from '@angular/core';
import { PciFormService } from '../../service/pciform.service';

@Component({
  selector: 'app-pciform1',
  templateUrl: './pciform1.component.html',
  styleUrls: ['./pciform1.component.css']
})
export class PciForm1Component implements OnInit {

  dealer: String;
  zone: String;
  year: Number;
  crop: String;
  hybrid: String;
  material: String;
  priceChangeFrom: Date;
  priceChangeTo: Date;

  


  constructor(private pciFormService : PciFormService) { }

  ngOnInit() {
    
  }

  logForm(value: any) {
    console.log(value);
    this.pciFormService.invokePciFormService(value);
  }

}
