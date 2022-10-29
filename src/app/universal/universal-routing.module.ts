import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';


const routes: Routes = [
  
  { path: '', component: Landingpage1Component},
  { path: 'About', component: Landingpage2Component},
  { path: 'Contectus', component: Landingpage3Component},
  { path: 'Register', component: RegisterComponent},
  { path: 'Login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
