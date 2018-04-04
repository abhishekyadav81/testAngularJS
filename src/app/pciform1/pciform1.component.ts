import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pciform1',
  templateUrl: './pciform1.component.html',
  styleUrls: ['./pciform1.component.css']
})
export class Pciform1Component implements OnInit {

  dealerInput: String;
  
  constructor() { }

  ngOnInit() {
  }

  logForm(value: any) {
    console.log(value);
  }

}
