import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';
import { HomeComponent } from './home/home.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

const routes: Routes = [
  {
    path:'trial',
    component:TrialComponent
  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'forms',
    component:AngularFormsComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
