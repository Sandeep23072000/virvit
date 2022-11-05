import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: any;
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      name: '',
      mobile: '',
      designation: '',
      aboutme: '',
      gender: '',
      dateofbirth: '',
      experience: '',
      salary: '',
      uploadresume: '',
      videotestimonial : '',
      videoresume: '',

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

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
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
}

