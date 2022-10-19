import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PasswordComponent } from './password/password.component';
import { TimeService } from './time.service';
import { HttpClientModule } from '@angular/common/http';

const AppRoutes: Routes =[
  { path: '', component: Landingpage1Component },
  { path: 'Landingpage2', component: Landingpage2Component },
  { path:'Register', component: RegisterComponent},
  { path:'Homepage', component: HomepageComponent},
  { path:'Login', component: LoginComponent},
  { path:'landingpage3', component: Landingpage3Component},
  { path:'Editprofile', component: EditprofileComponent},
  { path:'Changepassword', component: ChangepasswordComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    Landingpage1Component,
    Landingpage2Component,
    HeaderComponent,
    FooterComponent,
    Landingpage3Component,
    EditprofileComponent,
    ChangepasswordComponent,
    PasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes),
    TooltipModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
