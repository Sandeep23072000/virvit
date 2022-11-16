import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent {
  searchkey: any;
  http: any;

  constructor(
    private httpClient: HttpClient,
    private timeService: TimeService,
  ) {
    this.searchkey = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.searchkey);

    // this.timeService.getapi('apply-job/?user=' +).subscribe(data => {
    //   console.log(data);
    // });
    this.apply(this.searchkey);
  }
  apply(data: any) {
    this.timeService.getapi('apply-job/?user=' + data.id).subscribe(data => {
      console.log(data);
    });
  }

  save(data: any) {
    this.timeService.getapi('bookmark-job/?user=' + data.id).subscribe(data => {
      console.log(data);
    });
  }
}
