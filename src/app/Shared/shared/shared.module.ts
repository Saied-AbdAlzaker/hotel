import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  exports: [
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
