import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http : HttpClient) { }


  public addContrat(c: Contrat) : Observable<any> {

    return this.http.post<any>(this.baseUrl+'create/contrat',c);

  }

  public getContrats() : Observable<any> {
    return this.http.get<any>(this.baseUrl+'get/contrats');
  }
}
