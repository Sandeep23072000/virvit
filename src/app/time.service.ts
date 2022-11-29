import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TimeService {
  url = 'https://virvit.mydevpartner.website/vvapi/v1/'
  namevalue: any;

  constructor(
    private http: HttpClient
  ) {

  }

  postapi(url: string, data: any): Observable<any> {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + this.namevalue.token,
    });
    const requestOptions = { headers: headers };

    console.log(requestOptions);

    return this.http.post(this.url + url, data, requestOptions);

  }
  getapi(url: string): Observable<any> {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + this.namevalue.token,
    });
    const requestOptions = { headers: headers };

    console.log(requestOptions);

    return this.http.get(this.url + url, requestOptions);
  }
  postForm(url:any, params:any) {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',})
      // headers: new HttpHeaders({ 'Accept': 'application/json', })
    };
    if (localStorage.getItem("login") ||'{}') {
        httpOptions = {
            headers: new HttpHeaders({'Authorization': 'token '+this.namevalue.token })
        };
    }
    var formData: any = new FormData();
    for (var i = 0; i < params.length; ++i) {
        var key = Object.keys(params[i])[0];
        var prm = params[i][0];
        formData.append(key, params[i][key]);
    }
    return this.http.post(this.url + url, formData, httpOptions);
}
}