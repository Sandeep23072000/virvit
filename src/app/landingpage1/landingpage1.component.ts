import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service'; 

@Component({
  selector: 'app-landingpage1',
  templateUrl: './landingpage1.component.html',
  styleUrls: ['./landingpage1.component.css']
})
export class Landingpage1Component implements OnInit {

  constructor(private auth:TimeService) { 

  }

  ngOnInit(): void {
  }

}
