import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../authgaurd/auth.guard';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: '',canActivate:[AuthGuard], component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'privacy', component: PrivacyComponent},
  { path: 'jobapplication', component: JobapplicationComponent},
  { path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
