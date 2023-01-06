import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
 passwordForm = this.fb.group({
  email: ['', Validators.required]
 });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { 
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    if(this.passwordForm.valid){
      this.http.post('https://virvit.mydevpartner.website/vvapi/v1/forgot-password/', this.passwordForm.value).subscribe((response:any)=> {
      console.log(response) 
      this.toastr.success("","Reset Password Successfully Sent");
    });
  }
}
}
