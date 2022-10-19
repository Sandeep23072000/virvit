import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {
    component: Landingpage1Component,
    path:'',
  },
  {
    component: Landingpage2Component,
    path:'About',
  },
  {
    component: Landingpage3Component,
    path:'Contectus',
  },
  {
    component: HomepageComponent,
    path:'Homepage',
  },
  {
    component: LoginComponent,
    path:'Login',
  },
  {
    component: RegisterComponent,
    path:'Register',
  },
  {
    component: EditprofileComponent,
    path:'Editprofile',
  },
  {
    component: ChangepasswordComponent,
    path:'Changepassword',
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
