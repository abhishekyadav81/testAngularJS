import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {PciFormData} from '../model/pciformdata'
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':'text/xml' })

};

@Injectable()
export class PciFormService {


  constructor(private http:HttpClient) { }
    private pciFormUrl =
    " https://api01-np.agro.services:443/pricepush/ws_wrapper_post";

  /** POST: submit data to the server */
  invokePciFormService (pciFormData: PciFormData) {
    return this.http.post<PciFormData>(this.pciFormUrl, pciFormData, httpOptions)
    .catch(this.errorHandler)
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error.message);
    return Observable.throw(error.message || 'Server Error');
  }

}
