import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  jobdetails: any;
  skillname: any;
  constructor() {
    this.jobdetails = JSON.parse(localStorage.getItem("jobdetail") || '{}');
    console.log(this.jobdetails);
    this.jobdetails.skill_list.forEach((skill:any)=>{
      this.skillname = skill.name;
    })
  }

  ngOnInit(): void {
  }
}
