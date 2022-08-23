import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
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

  public getAllFiles() : Observable<any>{
    return this.http.get<any>(this.baseUrl+'file/getall');
    
  }


  uploadFile(file : any) : Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
   // return this.http.post<any>(this.baseUrl+"file/upload",file)

   return this.http.request(req);

  }


  updateFile(id: any, file: any): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('PUT', `${this.baseUrl}file/update/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
   return this.http.request(req);
  //  return this.http.put(this.baseUrl+"/get"+id, data);
  }





}
