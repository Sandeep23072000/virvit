import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    CandidateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    NgModule
  ]
})
export class CandidateModule { }
