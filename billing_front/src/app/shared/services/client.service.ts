import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
   }

   GetClient( clientId: string): Observable<Client> {
    return this.http.get<Client>(`${environment.url_api}/api/clients/` + clientId);
 }

}
