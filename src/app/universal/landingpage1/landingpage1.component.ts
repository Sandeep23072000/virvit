import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  constructor(
    private fb : FormBuilder,
    private http : HttpClient

   ) {
    this.searchForm = this.fb.group({
      title:'',
      area: ''
    });
  }
  // this.title();
  // console.log(this.title);

  onSubmit(){
    this.searchForm.value;
    console.log(this.searchForm.value); 
    this.http.post('https://virvit.mydevpartner.website/vvapi/v1/job-filter/', this.searchForm.value).subscribe(data => {
        console.log(data);

        // this.searchForm.reset();
        localStorage.setItem("search", JSON.stringify(data));
  });
  this.searchkey =JSON.parse(localStorage.getItem("search") || '{}');
  console.log(this.searchkey);
  // ngOnInit(): void {
  //   localStorage.clear();
  // }
}
}