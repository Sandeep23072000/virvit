import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent implements OnInit {
  applykey: any;
  http: any;
  loginkey: any;
  searchkey: any;
  apply2: any;
  save2: any;
  link: any;
  params: any;
  activeId: number = 1;

  constructor(
    private httpClient: HttpClient,
    private timeService: TimeService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.loginkey = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.loginkey);
    this.apply(this.loginkey);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.link = params['link'];
        console.log(params);
      }
      )
      if(this.link!=null) {
        this.activeId=2;
      }
      else{
        this.activeId=1;
      }
  }
  apply(data: any) {
    this.spinner.show();
    this.timeService.getapi('apply-job/?user=' + data.id).subscribe(response => {
      console.log(response);
      this.apply2 = response.results;
      this.spinner.hide();
    });
  }
  save(data: any) {
    this.spinner.show();
    this.timeService.getapi('bookmark-job/?country=' + data.id).subscribe(response => {
      console.log(response);
      this.save2 = response.results;
      this.spinner.hide();
    });
  }
}
