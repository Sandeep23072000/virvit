import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { TimeService } from '../time.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  skillslist: any;
  data: any;
  perferencelist: any;
  registerForm = this.fb.group({
    firstname: '',
    lastname: '',
    email: '  ',
    gender: '',
    birthdate: '',
    skill: ' ',
    jobpreference: ' ',
    startofwork: ' ',
    password: ' ',
    confirmpassword: ' ',
    resume: ' ',
    device_id: '1',


  });
  submitted = false;
  httpClint: any;
  formBilder: any;

  constructor(
    private timeService: TimeService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.addskill();
    console.log(this.skillslist);
    this.addperference();
    console.log(this.perferencelist);

  }

  addskill() {
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/skill/').subscribe((data: any) => {
      console.log(data.results);
      this.skillslist = data.results;
    })
  }
  addperference() {
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/job-preference/').subscribe((data: any) => {
      console.log(data.results);
      this.perferencelist = data.results;
    })
  }
  
  get signupFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log('id: ' + this.skillslist);
    console.log('id: ' + this.perferencelist);

    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log('Your form has been submitted', this.registerForm.value);
      this.http.post('http://https://virvit.mydevpartner.website/vvapi/v1/signup/', this.registerForm.value).subscribe((data: any) => {
        console.log(data);
      })
    }
    else {
      console.log('error');
    }
  }
}






