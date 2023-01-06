import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
import { Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  showDiv = false;
  namevalue: any;
  submitted = false;

  privacyForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private timeService: TimeService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
    this.privacyForm = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    
  }

  showdiv() {
    
      this.showDiv = true;   
}
  // showdiv2(){
  //   this.showDiv = false;
  // }
  onSubmit() {
    this.submitted = true;
    if(this.privacyForm.valid){
    this.timeService.postapi('change-password/', this.privacyForm.value).subscribe(data => { console.log(data) });
  }
  else {
    console.log('error');
  }
}
}