import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent implements OnInit{
  applykey: any;
  http: any;
  loginkey: any;
  searchkey: any;
  apply2: any;
  save2: any;
  link: any;
  link2: any;

  constructor(
    private httpClient: HttpClient,
    private timeService: TimeService,
    private route: ActivatedRoute,
  ) {
    this.loginkey = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.loginkey);
    // this.timeService.getapi('apply-job/?user=' +).subscribe(data => {
    //   console.log(data);
    // });
    this.apply(this.loginkey);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params=>{
        this.link = params['link'];
        console.log(this.link);
        this.link2=params;
      }
    )
  }

  apply(data: any) {
    this.timeService.getapi('apply-job/?user=' + data.id).subscribe(response => {
      console.log(response);
      this.apply2 = response.results;
    });
    
  }

  save(data: any) {
    this.timeService.getapi('bookmark-job/?user=' + data.id).subscribe(response => {
      console.log(response);
      this.save2 = response.results;
    });
  }
}
