import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './navbar/components/change-password/change-password.component';
import { LogOutComponent } from './navbar/components/log-out/log-out.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ProfileComponent } from './profile/profile.component';
import { DarkComponent } from './dark/dark.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,RouterLink,
    MatDialogModule, MatPaginatorModule,MatButtonModule,MatIconModule, MatTooltipModule,RouterModule,
    MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatButtonToggleModule

  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,
     ReactiveFormsModule,HttpClientModule,FormsModule,SidebarComponent,RouterLink,
     MatDialogModule, MatPaginatorModule, NavbarComponent,MatButtonModule,MatIconModule,MatTooltipModule,RouterModule,
    MatSelectModule,MatFormFieldModule,MatDialogModule, MatPaginatorModule, CommonModule,MatDatepickerModule,MatNativeDateModule
  ],
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ChangePasswordComponent,
    LogOutComponent,
    DeleteDialogComponent,
    ProfileComponent,
    DarkComponent
  ]
})
export class SharedModule { }
