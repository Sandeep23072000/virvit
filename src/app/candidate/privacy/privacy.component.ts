import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

    show=false;
    show2=false;
    
    showdiv(){
      this.show = !this.show;
      this.show2 = !this.show2;  
    }
    ngOnInit(): void {
      
    }
}
