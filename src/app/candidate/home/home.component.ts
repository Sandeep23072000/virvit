import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  // data : any;
  search2Form: FormGroup;
  title: any;
  area: any;
  httpClint: any;
  searchkey: any;
  savekey: any;
  item: any;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private timeService: TimeService,
  ) {
    this.search2Form = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
  }

  onSubmit() {
    this.submitted = true;
    // if (this.search2Form.invalid) {
    //   return;
    // }
    if (this.search2Form.valid)
      this.search2Form.value;
    this.http.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', this.search2Form.value).subscribe(data => {
      localStorage.setItem("search", JSON.stringify(data));
    });
    this.searchkey = JSON.parse(localStorage.getItem("search") || '{}');
    console.log(this.searchkey);
  }
  save(id: number) {
    const data = { job: id, user: this.name.id }
    this.timeService.postapi('bookmark-job/', data).subscribe(data => {
      console.log(data)
    });
  }
  apply(id: number) {
    const data = { job: id, user: this.name.id }
    this.timeService.postapi('apply-job/', data).subscribe(data => {
      console.log(data)
    });
  }



}
