import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';


import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxDropzoneModule
  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule,NgxDropzoneModule
     ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  
  declarations: [SharedComponent]
})
export class SharedModule { }
