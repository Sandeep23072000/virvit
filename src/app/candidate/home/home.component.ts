import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  search2Form: FormGroup;
  title: any;
  area: any;
  httpClint: any;
  searchkey: any;
  item: any;
  submitted: boolean=false;

  constructor(
    private fb : FormBuilder,
    private http : HttpClient,
  ) 
  { 
    this.search2Form = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.search2Form.invalid) {
      return;
    }
    if(this.search2Form.valid)
    this.search2Form.value;
    console.log(this.search2Form.value); 
    this.http.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', this.search2Form.value).subscribe(data => {
        console.log(data);
        // this.searchForm.reset();
        localStorage.setItem("search", JSON.stringify(data));
  });
  this.searchkey =JSON.parse(localStorage.getItem("search") || '{}');
  console.log(this.searchkey);
}

  ngOnInit(): void {
    this.name =JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
  }

}
