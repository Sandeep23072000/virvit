import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent {
  searchkey: any;
  http: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.searchkey = JSON.parse(localStorage.getItem("search") || '{}');
  }


}
