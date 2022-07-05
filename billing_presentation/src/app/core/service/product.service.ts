import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) {  }

  GetProduct( productId: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/Product/` + productId);
  }

}
