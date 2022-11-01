import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;

  constructor() { }

  ngOnInit(): void {
    this.name =JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.name);
  }

}
