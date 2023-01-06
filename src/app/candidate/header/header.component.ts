import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any;

  constructor(
      private router: Router,
      private toastr: ToastrService,
      
  ) {}
  ngOnInit(): void {
    this.name =JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
  }
  clear(){
    localStorage.clear();
    this.toastr.success("", "Logout Successfully");
  }
}
