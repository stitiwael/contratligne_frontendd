import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestEntity } from './test-entity';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl = 'http://localhost:8080/';
  delUrl = 'http://localhost:8080/test/delete';
  updateUrl = 'http://localhost:8080/update'

  constructor(private http: HttpClient) { }

  public getTestingData() : Observable<TestEntity[]> {

    return this.http.get<TestEntity[]>(this.baseUrl+'test/show')

  }

  public addTestingData(t: TestEntity) : Observable<any> {

    return this.http.post<any>(this.baseUrl+'test/add',t);

  }

  public deletedata(id:any) : Observable<any>{
    return this.http.delete<number>(this.delUrl+"/"+id);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl+"/get"+id, data);
  }

  get(id: any): Observable<any> {
    return this.http.get(this.delUrl+"/"+id);
  }




}
