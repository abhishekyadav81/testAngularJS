import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {PciFormData} from '../model/pciformdata'
import {Response} from '../model/response'
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':'application/json' })

};

@Injectable()
export class PciFormService {


  constructor(private http:HttpClient) { }
    private pciFormUrl ="https://api01-np.agro.services:443/pricepush/f4fcaller";
   // " https://api01-np.agro.services:443/pricepush/f4fcaller";
  // " http://localhost:8080/f4fcaller";


  /** POST: submit data to the server */
  /*invokePciFormService (pciFormData: PciFormData) {
    return this.http.post<PciFormData>(this.pciFormUrl, pciFormData, httpOptions)
    .catch(this.errorHandler)
  }*/

  invokePciFormService (pciFormData: PciFormData) {
    return this.http.post<Response>(this.pciFormUrl, pciFormData, httpOptions)
      .catch(this.errorHandler)
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error.message);
    return Observable.throw(error.message || 'Server Error');
  }

}
