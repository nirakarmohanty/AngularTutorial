import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { Login } from 'src/app/model/login';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Resetuser } from './resetuser';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  private loginService: LoginService;
  private appcmponent: AppComponent;

  constructor(loginService: LoginService, 
    public dialog: MatDialog,private router: Router, 
    appcmponent: AppComponent,public overlayContainer: OverlayContainer) {
    this.loginService = loginService;
    this.appcmponent = appcmponent;
  }

  
  @HostBinding('class') componentCssClass;

  changeTheme(theme){
  
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
  ngOnInit(){}
  loginForm: Login;
  username: string;
  password: string;

  submitted = false;
  isLogin = false;

  


  onSubmit(loginForm: NgForm) {

    console.log(loginForm.value);
    this.submitted = true;
    loginForm.reset();
    //this.loginService.doLogin(loginForm.value);
    this.appcmponent.isLogin = true;

    this.router.navigate(['./sucessLogin']);

  }
  resetUser(): void {
    //this.username="Nirakar";
    console.log("Reset User called !!!")
    const dialogRef = this.dialog.open(Resetuser, {
      height: '450px',
      width: '600px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed' + result);

    });
  }


}
