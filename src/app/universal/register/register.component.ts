import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
    email: ['', Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    gender: ['', Validators.required],
    birthdate: ['', Validators.required],
    mobilephonenumber: ['', Validators.required],
    skill: ['', Validators.required],
    jobpreference: ['', Validators.required],
    startofwork: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    resume: ['', Validators.required],
    device_id: '1',
  });
  submitted = false;
  httpClint: any;
  formBilder: any;
  router: any;



  constructor(
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
  
    function passwordMatch(password: any, confirmpassword: any) {
      return function (form: AbstractControl) {
        const passwordvalue = form.get(password)?.value
        const confirmPasswordValue = form.get(confirmpassword)?.value

        if (passwordvalue === confirmPasswordValue) {
          return null;

        }
        return { passwordMissmatchError: true }
      }
    }
  }
  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }
  onSubmit() {
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

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

}

