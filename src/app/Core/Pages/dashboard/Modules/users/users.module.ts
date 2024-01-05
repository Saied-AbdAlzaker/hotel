import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
