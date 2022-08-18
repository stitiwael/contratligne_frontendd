import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http : HttpClient) { }


  public addNode(n: any) : Observable<any> {

    return this.http.post<any>(this.baseUrl+'create/nod',n);

  }

  public getAllNodes() : Observable<Node>{
    return this.http.get<Node>(this.baseUrl+'get/nodes');
    
  }

  public getParentNodes() : Observable<Node>{
    return this.http.get<Node>(this.baseUrl+'get/nodesleveli');
    
  }

  

  public getChildNodes(name : any) : Observable<Node>{
    return this.http.get<Node>(this.baseUrl+"get/nodes/"+name);
    
  }


}
