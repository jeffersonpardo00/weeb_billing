import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BillPurchases } from '../models/BillPurchases';

@Injectable({
  providedIn: 'root'
})
export class BillPurchasesService {

  constructor( private http: HttpClient ) { }

  createBillPurchases( billPurchases: BillPurchases ){
    return this.http.post(`${environment.url_api}api/BillPuchases`, billPurchases);
  }

}
