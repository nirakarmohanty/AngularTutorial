import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material';
import { Inject, Component } from '@angular/core';
import { Login } from 'src/app/model/login';
import { ResetLogin } from 'src/app/model/restLogin';
import {MatSnackBarModule, MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
    selector: 'resetuser',
    templateUrl: 'resetuser.html',
    styleUrls: ['./login.component.scss'],
  })
export class Resetuser {
    constructor(
        public dialogRef: MatDialogRef<Resetuser>,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: ResetLogin) { }
    
        
      onOkClick( resetLoginData: ResetLogin): void {
        console.log("on OK click "+ resetLoginData.username);
        this.dialogRef.close();

        this.snackBar.openFromComponent(ResetUserDetailsComponent, {
          duration: 2500,
          horizontalPosition:'right',
          data:resetLoginData.username
        });
      }
      onNoClick(): void {
        this.dialogRef.close();
      }
}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snackbar.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
      width:177px;
      
    }
  `],
})
export class ResetUserDetailsComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  
}