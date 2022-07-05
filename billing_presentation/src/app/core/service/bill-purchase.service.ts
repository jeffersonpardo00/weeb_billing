import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BillPurchases } from '../models/BillPurchases';

@Injectable({
  providedIn: 'root'
})
export class BillPurchaseService {

  constructor( private http: HttpClient  ) { }

  CreateBillPurchase(billPurchases: BillPurchases){
    console.log("CreateBillPurchase service");
    console.log(billPurchases);

   // return this.http.post('https://localhost:44375/api/BillPuchases', billPurchases);
    return this.http.post(`${environment.url_api}/api/BillPuchases/`, billPurchases);
  }

}
