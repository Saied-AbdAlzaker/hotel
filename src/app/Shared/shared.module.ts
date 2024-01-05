import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { ChangePasswordComponent } from './sidebar/components/change-password/change-password.component';
import { LogOutComponent } from './sidebar/components/log-out/log-out.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,RouterLink,
    MatSelectModule,MatFormFieldModule,MatDialogModule, MatPaginatorModule
  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,
    HttpClientModule,SidebarComponent,RouterLink,
    NavbarComponent,MatFormFieldModule,MatSelectModule,DeleteDialogComponent,MatDialogModule,
    MatPaginatorModule, NavbarComponent
  ],

  declarations: [
    SidebarComponent,
    NavbarComponent,
    ChangePasswordComponent,
    LogOutComponent,
    DeleteDialogComponent
  ]
})
export class SharedModule { }
