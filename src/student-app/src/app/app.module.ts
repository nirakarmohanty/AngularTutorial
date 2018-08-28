import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule,MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './/app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    
    NavigationComponent,
    StudentComponent,
    HomeComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
  ],
  exports:[
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
