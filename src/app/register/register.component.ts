import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { TimeService } from '../time.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  skillslist: any;
  data: any;
  preferencelist: any;
  registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    gender: ['', Validators.required],
    birthdate: ['', Validators.required],
    skill: ['', Validators.required],
    jobpreference: ['', Validators.required],
    startofwork: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required,( Validators.required)],
    resume: ['', Validators.required],
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
    this.addpreference();
    console.log(this.preferencelist);

  }

  addskill() {
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/skill/').subscribe((data: any) => {
      console.log(data.results);
      this.skillslist = data.results;
    })
  }
  addpreference() {
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/job-preference/').subscribe((data: any) => {
      console.log(data.results);
      this.preferencelist = data.results;
    })
  }

  get signupFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log('id: ' + this.skillslist);
    console.log('id: ' + this.preferencelist);

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
  
  // get passwordMatchError() {
  //   return (
  //     this.registerForm.getError('mismatch') &&
  //     this.registerForm.get('confirmPassword')?.touched
  //   );
  // }
}

