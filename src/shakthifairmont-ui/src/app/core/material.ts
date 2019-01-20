import {NgModule} from "@angular/core";

import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule,MatLabel , 
  MatProgressSpinnerModule, MatTabsModule, MatTab, MatSnackBarModule

} from '@angular/material';

@NgModule({

  imports: [
  MatDividerModule,
   
  MatSnackBarModule,
  CommonModule,
  MatCardModule,
  MatTabsModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule

  ],

  exports: [

  CommonModule,

   MatToolbarModule, 
   MatTabsModule,
   MatLabel,
   MatButtonModule, 
   MatCardModule, 

   MatInputModule, 

   MatDialogModule, 
   MatSnackBarModule,
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatDividerModule,
   MatProgressSpinnerModule

   ],

})

export class Material {
}
