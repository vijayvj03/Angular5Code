import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CommonService {
  selectedEmployee : any;
  employeeList : any;
  constructor(private http : Http) { }

  postEmployee(emp : any){
    debugger;
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:62347/api/Employee',body,requestOptions).map(x => x.json());
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:62347/api/Employee/' + id,
      body,
      requestOptions).map(res => res.json());
  }

  getEmployeeList(id=null){
    return this.http.get('http://localhost:62347/api/Employee')
      .map(res =>res.json());
  }
  getEmployeeById(id){
    let params = new HttpParams().set("id", id);
    return this.http.get('http://localhost:62347/api/Employee?id='+id)
      .map(res =>res.json());
  }
  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:62347/api/Employee/' + id).map(res => res.json());
  }
}