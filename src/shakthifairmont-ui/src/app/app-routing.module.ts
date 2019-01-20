import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './header/contactus/contactus.component';
import { LoginComponent } from './header/login/login.component';
import { HomeComponent } from './header/home/home.component';
import { RegisterComponent } from './header/register/register.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './dashboard/account/account.component';
import { ResidentComponent } from './dashboard/resident/resident.component';


const routes: Routes = [

  { path: 'cancel', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sucessLogin', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
  { path: 'residence', component: ResidentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
