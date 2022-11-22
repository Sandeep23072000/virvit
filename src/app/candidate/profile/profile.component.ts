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
  resume: any;
  testimonial: any;
  videoupload: any;


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
    if (this.namevalue.employment_detail.length > 0) {
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

  resumeupload(event: any) {
    this.resume = event.target.files[0];
    console.log(this.resume);
  }
  videoresume(event: any) {
    this.videoupload = event.target.files[0];
    console.log(this.videoupload);
  }
  videotestimonial(event: any) {
    this.testimonial = event.target.files[0];
    console.log(this.testimonial)
  }

  onSubmit() {
    // const formData: any = new FormData();

    // formData.append('about', this.profileForm.get('about'));
    // formData.append('country', this.profileForm.get('country')?.value);
    // formData.append('salary', this.profileForm.get('salary')?.value);
    // formData.append('experience', this.profileForm.get('experience')?.value);
    // formData.append('currency', this.profileForm.get('currency')?.value);
    // formData.append('designation', this.profileForm.get('desigination')?.value);
    // formData.append('dob', this.profileForm.get('dob')?.value);
    // formData.append('email', this.profileForm.get('email')?.value);
    // formData.append('job_preference', this.profileForm.get('job_preference')?.value);
    // formData.append('skill', this.profileForm.get('skill')?.value);
    // formData.append('first_name', this.profileForm.get('first_name')?.value);
    // formData.append('gender', this.profileForm.get('gender')?.value);
    // formData.append('employment_status', this.profileForm.get('employment_status')?.value);
    // formData.append('last_name', this.profileForm.get('last_name')?.value);
    // formData.append('dial_code', this.profileForm.get('dial_code')?.value);
    // formData.append('country_code', this.profileForm.get('country_code')?.value);
    // formData.append('mobile', this.profileForm.get('mobile')?.value);
    // formData.append('educationitem', this.profileForm.get('educationitem')?.value);
    // formData.append('employmentitem', this.profileForm.get('employmentitem')?.value);
    // formData.append('removeEmpitem', this.profileForm.get('removeEmpitem')?.value);
    // formData.append('removeEducationitem', this.profileForm.get('removeEducationitem')?.value);
    // formData.append('resume', this.resume);
    // formData.append('videoupload', this.videoupload);
    // formData.append('videotestimonial', this.testimonial);

    // console.log(formData);
    const Candidatelist = [
      { about: this.profileForm.get('aboutme')?.value },
      { country: this.profileForm.get('country')?.value },
      { salary: this.profileForm.get('salary')?.value },
      { experience: this.profileForm.get('experience')?.value },
      { currency: this.profileForm.get('currency')?.value },
      { designation: this.profileForm.get('designation')?.value },
      { dob: this.profileForm.get('dob')?.value },
      { email: this.profileForm.get('email')?.value },
      { job_preference: this.profileForm.get('job_preference')?.value },
      { skill: this.profileForm.get('skill')?.value },
      { first_name: this.profileForm.get('first_name')?.value },
      { gender: this.profileForm.get('gender')?.value },
      { employment_status : this.profileForm.get('employment_status')?.value},
      { last_name : this.profileForm.get('last_name')?.value},
      { dial_code : this.profileForm.get('dial_code')?.value},
      { country_code : this.profileForm.get('country_code')?.value},
      { mobile : this.profileForm.get('mobile')?.value},
      { educationitem : this.profileForm.get('educationitem')?.value},
      { removeEmpitem : this.profileForm.get('removeEmpitem')?.value},
      { removeEducationitem : this.profileForm.get('removeEducationitem')?.value},
      { resume : this.resume},
      { videoupload : this.videoupload},
      { videotestimonial : this.testimonial}


    ];

    this.timeService.postForm('user-profile-update/', Candidatelist).subscribe(response => {
      console.log(response)
    });
  }


}


