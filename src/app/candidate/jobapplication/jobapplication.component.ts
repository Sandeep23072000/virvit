import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent {
  applykey: any;
  http: any;
  loginkey: any;
  searchkey: any;
  apply2: any;
  save2: any;

  constructor(
    private httpClient: HttpClient,
    private timeService: TimeService,
  ) {
    this.loginkey = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.loginkey);
    


    // this.timeService.getapi('apply-job/?user=' +).subscribe(data => {
    //   console.log(data);
    // });
    this.apply(this.loginkey);
  }
  apply(data: any) {
    this.timeService.getapi('apply-job/?user=' + data.id).subscribe(response => {
      console.log(response);
      this.apply2 = response.results;
    });
    
  }

  save(data: any) {
    this.timeService.getapi('bookmark-job/?user=' + this.loginkey.id).subscribe(response => {
      console.log(Response);
      this.save2 = response.results;
    });
  }
}
