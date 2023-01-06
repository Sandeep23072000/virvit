import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landingpage3',
  templateUrl: './landingpage3.component.html',
  styleUrls: ['./landingpage3.component.css']
})
export class Landingpage3Component implements OnInit {

  constructor(private spinner: NgxSpinnerService) { 
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
