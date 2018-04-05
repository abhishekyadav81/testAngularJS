import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {PciFormData} from '../model/pciformdata'
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PciFormService {

 
  constructor(private http:HttpClient) { }
    pciFormUrl : string="";
 
  /** POST: submit data to the server */
  invokePciFormService (pciFormData: PciFormData) {
    return this.http.post<PciFormData>(this.pciFormUrl, pciFormData, httpOptions).pipe(
      tap((pciFormData: PciFormData) => console.log('Post Done')))
  }

}