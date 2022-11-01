import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any;
  // router: any;

  constructor(
      private router: Router
  ) { 
    
  }
  ngOnInit(): void {
    this.name =JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
    if (this.name === '{}'){
      return;
    }
  }
}
