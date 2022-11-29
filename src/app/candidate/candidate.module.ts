import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PrivacyComponent } from './privacy/privacy.component';
import { MatIconModule } from '@angular/material/icon';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgxMatSelectSearchModule, } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CandidateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    PrivacyComponent,
    JobapplicationComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    MatIconModule,
    FormsModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
  ]
})
export class CandidateModule { }
