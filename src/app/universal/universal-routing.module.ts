import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Landingpage1Component } from './landingpage1/landingpage1.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from '../authgaurd/auth.guard';


const routes: Routes = [
  
  { path: '', component: Landingpage1Component},
  { path: 'about', component: Landingpage2Component},
  { path: 'contectus', component: Landingpage3Component},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class UniversalRoutingModule { }
