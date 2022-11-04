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
     aboutme : '',
     gender : '',
     dateofbirth : '',
     experience : '',
     salary : '',
     uploadresume : '',

     education : this.fb.array([]),
    });
  }

  // get profileFormControl() {
  //   return this.profileForm.controls;
  // }

  education(): FormArray {
    return this.profileForm.get("education") as FormArray
  }
  eduform(): FormGroup {  
    return this.fb.group({  
       title : '',
       university : '',
       startdate : '',
       enddate : '',

    })  
  }  

  addeducation() {
    this.education().push(this.eduform());
  }

  // removeedu(i: number) {
  //   this.education().removeAt(i);
  // }

  // onSubmit() {
  //   console.log(this.educationForm.value);
  // }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
  }

}

