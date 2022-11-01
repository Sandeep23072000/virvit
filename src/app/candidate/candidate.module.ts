import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../authgaurd/auth.guard';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    CandidateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ]
})
export class CandidateModule { }
