import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule,FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landingpage1',
  templateUrl: './landingpage1.component.html',
  styleUrls: ['./landingpage1.component.css']
})
export class Landingpage1Component {
  searchForm: FormGroup;
  title: any;
  area: any;
  httpClint: any;
  searchkey: any;
  item: any;
  submitted: boolean=false;
  jobsdata: any;
  constructor(
    private fb : FormBuilder,
    private http : HttpClient,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  

   ) {
    this.spinner.show();
    this.searchForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
    });
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/jobs/').subscribe((response: any) => {
      console.log(response.results);
      this.jobsdata = response.results;
      this.spinner.hide();
  });
}

  onSubmit(){
    this.spinner.show();
    this.submitted = true;
    // if (this.searchForm.invalid) {
    //   return;
    // }
    if(this.searchForm.valid)
    this.searchForm.value;
    console.log(this.searchForm.value); 
    this.http.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', this.searchForm.value).subscribe(data => {
        console.log(data);
        localStorage.setItem("search", JSON.stringify(data));
        this.spinner.hide();
        this.toastr.success("", "Successfully Searched Jobs");
  });
  this.searchkey =JSON.parse(localStorage.getItem("search") || '{}');
  console.log(this.searchkey);
}
 show=false;
 showdiv(){
  this.show = !this.show;  
}
}