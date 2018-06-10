import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';



import { AppComponent } from './app.component';
import { PciForm1Component } from './pciform1/pciform1.component';
import {PciFormService} from '../service/pciform.service'



@NgModule({
  declarations: [
    AppComponent,
    PciForm1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PciFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
