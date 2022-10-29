import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UniversalComponent,
    HeaderComponent,
    FooterComponent,
    Landingpage1Component,
    Landingpage2Component,
    Landingpage3Component,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    UniversalRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UniversalModule { }
