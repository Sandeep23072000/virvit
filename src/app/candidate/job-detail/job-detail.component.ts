import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  data : any;
  jobdetails: any;
  constructor(
    private route: ActivatedRoute,
    private timeService: TimeService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    this.data = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    this.timeService.getapi('jobs/' + this.data + '/').subscribe(response => {
      console.log(response)
      this.jobdetails = response;
      this.spinner.hide();
    });
    // this.jobdetails.skill_list.forEach((skill:any)=>{
    //   this.skillname = skill.name;
    // })
  }
  
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   console.log('The id of this route is: ', params['id']);
    // });
    // console.log(this.route.snapshot.params);
    // this.data = this.route.snapshot.params;
  }
}
