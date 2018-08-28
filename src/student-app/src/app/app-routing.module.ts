import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
   { path: 'account', component: AccountComponent },
   { path: 'service', component: StudentComponent },
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
