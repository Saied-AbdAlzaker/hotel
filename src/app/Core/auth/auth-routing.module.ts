import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [
  

{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'resetPassword', component:ResetPasswordComponent},
{path:'forget', component:ForgetPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
