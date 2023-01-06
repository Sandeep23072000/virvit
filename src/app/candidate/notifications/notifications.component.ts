import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/time.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  loginkey: any;
  notifications2: any;

  constructor(
    private timeservice: TimeService,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { 
    this.loginkey = JSON.parse(localStorage.getItem('login') || '{}');
    console.log(this.loginkey);

    this.notifications(this.loginkey); 
  }

  ngOnInit(): void {
  }
  notifications(data: any){
    this.spinner.show();
    this.timeservice.getapi('/notification/?user='+data.id).subscribe(response=>{
      console.log(response);
      this.notifications2 = response.results;
      this.spinner.hide();
    });
  }

}
