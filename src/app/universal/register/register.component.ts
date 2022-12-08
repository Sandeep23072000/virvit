import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  skillslist: any;
  submitted = false;
  data: any;
  uploadresume: any;
  preferencelist: any;
  registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    birthdate: ['', Validators.required],
    mobilephonenumber: ['', Validators.required],
    skill: ['', Validators.required],
    jobpreference: ['', Validators.required],
    startofwork: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    resume: ['', Validators.required],
    // device_id: '1',
  });

  employerForm = this.fb.group({
    email: ['', Validators.required],
    firstname: ['', Validators.required],
    contectpersion: ['', Validators.required],
    mobilephonenumber: ['', Validators.required],
    businessname: ['', Validators.required],
  });
  hide = true;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.addskill();
    console.log(this.skillslist);
    this.addpreference();
    console.log(this.preferencelist);

  }
  ngOnInit(): void {
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
  resumeupload(event : any){
    const resume = event.target.files[0];
    console.log(resume)
    this.uploadresume = resume;
  }
    //  passwordMatch(password: any, confirmpassword: any) {
    //   return function (form: AbstractControl) {
    //     const passwordvalue = form.get(password)?.value
    //     const confirmPasswordValue = form.get(confirmpassword)?.value

    //     if (passwordvalue === confirmPasswordValue) {
    //       return null;

    //     }
    //     return { passwordMissmatchError: true }
    //   }
    // }
  // getControl(name: any): AbstractControl | null {
  //   return this.registerForm.get(name)
  // }
  onSubmit() {

    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log('Your form has been submitted', this.registerForm.value);

    const formdata : any = new FormData();

    formdata.append('first_name',this.registerForm.get('firstname')?.value);
    formdata.append('last_name',this.registerForm.get('lastname')?.value);
    formdata.append('email',this.registerForm.get('email')?.value);
    formdata.append('mobile',this.registerForm.get('mobilephonenumber')?.value);
    formdata.append('gender',this.registerForm.get('gender')?.value);
    formdata.append('dob',this.registerForm.get('birthdate')?.value);
    formdata.append('skillList',JSON.stringify(this.registerForm.get('skill')?.value));
    formdata.append('job_preference',this.registerForm.get('jobpreference')?.value);
    formdata.append('resume',this.uploadresume);
    formdata.append('password',this.registerForm.get('password')?.value);
    formdata.append('cpassword',this.registerForm.get('confirmpassword')?.value);
    formdata.append('start_work',this.registerForm.get('startofwork')?.value);
    formdata.append('device_id','1');
    formdata.append('status','Active');
    formdata.append('dial_code','+91');
    formdata.append('role','Candidate');
    formdata.append('country_code','IN');
     
    this.http.post('https://virvit.mydevpartner.website/vvapi/v1/new-user-signup/',formdata).subscribe(data => {
      console.log(data);
  });
}
  
    else {
      console.log('error');
    }
  }
  // passwordMatchError() {
  //   return (
  //     this.registerForm.getError('mismatch') &&
  //     this.registerForm.get('confirmPassword')?.touched
  //   );
  // }

}

