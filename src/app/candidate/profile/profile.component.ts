import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  namevalue: any;
  profileForm: FormGroup;
  data: any;

  constructor(
    private timeService: TimeService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.profileForm = this.fb.group({
      fullname: '',
      mobile: '',
      email: '',
      designation: '',
      gender: '',
      dateofbirth: '',
      experience: '',
      salary: '',
      country: '',
      aboutme: '',

      education: this.fb.array([]),
      workexperience: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);
    console.log(this.namevalue.education_detail);
    if (this.namevalue != null) {
      this.profileForm.setValue({
        fullname: this.namevalue.fullname,
        mobile: this.namevalue.mobile,
        email: this.namevalue.email,
        designation: this.namevalue.designation,
        aboutme: this.namevalue.about,
        gender: this.namevalue.gender,
        dateofbirth: this.namevalue.dob,
        experience: this.namevalue.experience,
        salary: this.namevalue.salary,
        country: this.namevalue.country_detail.name,
        education: [],
        workexperience: [],

      });
    }
    this.namevalue.education_detail.forEach((value: any) => {
      console.log(value);
      this.education.push(this.fb.group({
        title: value.title,
        university: value.university,
        startdate: value.start_date,
        enddate: value.end_date,
        country: value.state_detail.country_detail.name,
        state: value.state_detail.name,

      }))
    });
    if(this.namevalue.employment_detail.length > 0) {
      this.namevalue.employment_detail.forEach((value: any) => {
      console.log(value);
      this.workexperience.push(this.fb.group({
        designation: value.designation,
        organization: value.organization,
        currentlyworking: value.currentlyworking,
        startdate: value.start_date,
        enddate: value.end_date,
        employment_status: value.employment_status,
      }))
    });
  }
}
  get education() {
    return this.profileForm.controls["education"] as FormArray;
  }

  addeducation() {
    const eduForm = this.fb.group({
      title: '',
      university: '',
      startdate: '',
      enddate: '',
      country: '',
      state: '',
    });
    this.education.push(eduForm);
  }

  removeedu(i: number) {
    this.education.removeAt(i);
  }


  get workexperience() {
    return this.profileForm.get("workexperience") as FormArray
  }
  addwork() {
    const workForm = this.fb.group({
      designation: '',
      organization: '',
      currentlyworking: '',
      startdate: '',
      enddate: '',
      employment_status: '',
    });
    this.workexperience.push(workForm);
  }
  removework(j: number) {
    this.workexperience.removeAt(j);
  }

  onSubmit() {
    // const formData: any = new FormData();

    // formData.append('about', this.profileForm.controls['about'].value);
    // formData.append('country', this.profileForm.controls['country'].value);
    // formData.append('salary', this.profileForm.controls['salary'].value);
    // formData.append('experience', this.profileForm.controls['experience'].value);
    // formData.append('currency', this.profileForm.controls['currency'].value);
    // formData.append('designation', this.profileForm.controls['desigination'].value);
    // formData.append('dob', this.profileForm.controls['dob'].value);
    // formData.append('email', this.profileForm.controls['email'].value);
    // formData.append('job_preference', this.profileForm.controls['job_preference'].value);
    // formData.append('skill()', this.profileForm.controls['skill()'].value);
    // formData.append('first_name', this.profileForm.controls['first_name'].value);
    // formData.append('gender', this.profileForm.controls['gender'].value);
    // formData.append('employment_status', this.profileForm.controls['employment_status'].value);
    // formData.append('last_name', this.profileForm.controls['last_name'].value);
    // formData.append('dial_code', this.profileForm.controls['dial_code'].value);
    // formData.append('country_code', this.profileForm.controls['country_code'].value);
    // formData.append('mobile', this.profileForm.controls['mobile'].value);
    // formData.append('educationitem', this.profileForm.controls['educationitem'].value);
    // formData.append('employmentitem', this.profileForm.controls['employmentitem'].value);
    // formData.append('removeEmpitem', this.profileForm.controls['removeEmpitem'].value);
    // formData.append('removeEducationitem', this.profileForm.controls['removeEducationitem'].value);

    // this.timeService.postapi('user-profile-update/',formData).subscribe(response => {
    //   console.log(response)
    // });
  }
}


