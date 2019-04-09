import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomePageComponent },
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'profile/:id', component:ProfileComponent },
  {path:'report/:id', component: ReportComponent},
  {path:'profile', component:ProfileComponent },
  {path:'report', component: ReportComponent},
  {path:'home/:id', component:HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
