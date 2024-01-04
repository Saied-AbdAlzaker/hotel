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

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,RouterLink
  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,
     ReactiveFormsModule,HttpClientModule,FormsModule,SidebarComponent,RouterLink,
     NavbarComponent
  ],

  declarations: [
    SidebarComponent,
    NavbarComponent,
    ChangePasswordComponent,
    LogOutComponent
  ]
})
export class SharedModule { }
