import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';
import {MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { PciForm1Component } from './pciform1/pciform1.component';
import {PciFormService} from '../service/pciform.service'
import {ConfirmationDialog} from './pciform1/confirmationdialog'


@NgModule({
  declarations: [
    AppComponent,
    PciForm1Component,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [PciFormService],
  entryComponents: [ConfirmationDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
