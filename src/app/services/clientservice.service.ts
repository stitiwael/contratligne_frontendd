import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  public addClient(c: Client) : Observable<any> {

    return this.http.post<any>(this.baseUrl+'create/client',c);

  }

  public getClients() : Observable<any> {
    return this.http.get<any>(this.baseUrl+'get/clients')
  }

  get(id: any): Observable<any> {
    return this.http.get(this.baseUrl+"get/contrat/"+id);
  }
}
