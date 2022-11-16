import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  namevalue: any;
  profileForm: FormGroup;

  constructor(
    private timeService: TimeService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.profileForm = this.fb.group({
      name: '',
      mobile: '',
      email: '',
      designation: '',
      gender: '',
      dateofbirth: '',
      experience: '',
      salary: '',
      country: '',

      education: this.fb.array([]),
      workexperience: this.fb.array([]),
    });
  }

  education(): FormArray {
    return this.profileForm.get("education") as FormArray
  }
  eduform(): FormGroup {
    return this.fb.group({
      title: '',
      university: '',
      startdate: '',
      enddate: '',

    })
  }

  addeducation() {
    this.education().push(this.eduform());
  }

  removeedu(i: number) {
    this.education().removeAt(i);
  }


  workexperience(): FormArray {
    return this.profileForm.get("workexperience") as FormArray
  }
  workform(): FormGroup {
    return this.fb.group({
      designation: '',
      organization: '',
      currentlyworking: '',
      startdate: '',
      enddate: '',

    })

  }
  addwork() {
    this.workexperience().push(this.workform());
  }
  removework(j: number) {
    this.workexperience().removeAt(j);
  }
  ngOnInit(): void {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);

    this.profileForm.setValue({
      name: this.namevalue.fullname,
      mobile: this.namevalue.mobile,
      email: this.namevalue.email,
      designation: this.namevalue.designation,
      gender: this.namevalue.gender,
      dateofbirth: this.namevalue.dob,
      experience: this.namevalue.experience,
      salary: this.namevalue.salary,
      country: this.namevalue.country_detail,
      education: this.namevalue.education_detail,
      workexperience: this.namevalue.employment_detail,

    });
  }
  onSubmit() {

    this.timeService.postapi('user-profile-update/', this.profileForm.value).subscribe(data=>{ console.log(data)});
    // this.timeService.getapi('user-profile-update/', this.profileForm.value).subscribe( data=>{ console.log(data)});

  }
}

