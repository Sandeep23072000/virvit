import { Component, OnInit } from '@angular/core';
// import { TimeService } from '../time.service';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroupName } from '@angular/forms';
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
    private router: Router,
    private http: HttpClient,
    // private timeService: TimeService,
    private fb: FormBuilder,
    

  ) {
    // localStorage.clear();
   }
  ngOnInit(): void {
  }
  get registerFormControl() {
    return this.checkoutForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    else {
      this.router.navigate(['/candidate']);
    }

    if (this.checkoutForm.valid) {
      console.log('Your form has been submitted', this.checkoutForm.value);
      this.http.post('https://virvit.mydevpartner.website/vvapi/v1/login/', this.checkoutForm.value).subscribe(data => {
        console.log(data);
          if (this.checkoutForm.invalid) {
            return;
          }
          else {
            console.log('error');
          }
          localStorage.setItem("login", JSON.stringify(data));
        })

    }
  }
}