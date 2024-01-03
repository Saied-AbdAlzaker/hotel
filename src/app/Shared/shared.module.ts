import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxDropzoneModule
  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule,NgxDropzoneModule,
     ReactiveFormsModule,HttpClientModule,FormsModule,SidebarComponent,
     NavbarComponent
  ],

  declarations: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
