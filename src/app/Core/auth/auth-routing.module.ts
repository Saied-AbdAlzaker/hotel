import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [
{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'signin',component:SigninComponent, data: { title: 'Sign In' }},
{path:'signup',component:SignupComponent,data: { title: 'Sign Up' }},
{path:'reset-password', component:ResetPasswordComponent,data: { title: 'Rest Your Password' }},
{path:'forgot-password',component:ForgetPasswordComponent,data: { title: 'Forget Your Password' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
