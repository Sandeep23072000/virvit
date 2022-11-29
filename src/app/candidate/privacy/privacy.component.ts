import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {
  showDiv = false;
  namevalue : any;

  privacyForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private timeService: TimeService,
  ) {
    this.privacyForm = this.fb.group({
      confirmpassword: '',
      old_password: '',
      new_password: '',
    });
  }

  showdiv() {
    this.showDiv = true;
  }
  showdiv2(){
    this.showDiv = false;
  }
  onSubmit() {
    this.timeService.postapi('change-password/', this.privacyForm.value).subscribe(data => { console.log(data) });
  }

}
