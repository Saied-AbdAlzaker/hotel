import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ForgetPasswordComponent } from 'src/app/Core/auth/Components/forget-password/forget-password.component';

const routes: Routes = [
  {path:'', component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
