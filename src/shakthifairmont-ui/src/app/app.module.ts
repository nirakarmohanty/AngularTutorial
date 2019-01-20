import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Material } from './core/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './header/contactus/contactus.component';
import { LoginComponent } from './header/login/login.component';
import { HomeComponent } from './header/home/home.component';
import { RegisterComponent } from './header/register/register.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { Resetuser, ResetUserDetailsComponent } from './header/login/resetuser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ResidentComponent } from './dashboard/resident/resident.component';
import { AccountComponent } from './dashboard/account/account.component';
 

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    ResetUserDetailsComponent,
    Resetuser,
    DashboardComponent,
    ResidentComponent,
    AccountComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    OverlayModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule,
    FormsModule 
  ], 
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
     },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}
    }
  ],
  entryComponents: [Resetuser,ResetUserDetailsComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
