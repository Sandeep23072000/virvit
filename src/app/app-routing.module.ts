import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authgaurd/auth.guard';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./universal/universal.module').then(m => m.UniversalModule) },
  { path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
