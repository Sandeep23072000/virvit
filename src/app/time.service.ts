import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { FormBuilder,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  url = 'https://virvit.mydevpartner.website/vvapi/v1'
  http: any;
  
  getapi(url:Data): Observable<any>{
    return this.http.get(this.url);
  }
 
  add(data:any): Observable<any> {  
    return this.http.post(this.url+'/login/',data).subscribe((data: any)=>{ 
      console.log(data);
  })

  }
  // addskill(data: any): Observable<any>{
  //   return this.http.get(this.url+'/skill/',data).subscribe((data: any)=>{
  //     console.log(data);
  //   })
  // }
}