import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroupName } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.compose([Validators.required])],
    device_id: 1,
  });
  httpClient: any;
  submitted = false;
  formBilder: any;

  constructor(
    private http: HttpClient,
    private timeService: TimeService,
    private fb: FormBuilder,

  ) { }
  ngOnInit(): void {

  }

  get registerFormControl() {
    return this.checkoutForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.checkoutForm.value);

    if (this.checkoutForm.valid) {
      console.log('Your form has been submitted', this.checkoutForm.value);
      this.http.post('http://https://virvit.mydevpartner.website/vvapi/v1/login/', this.checkoutForm.value).subscribe(data => {
        console.log(data);
      })
    } else {
      console.log('error');

    }


  }
}


