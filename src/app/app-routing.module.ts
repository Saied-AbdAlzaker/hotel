import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './Core/Pages/home/home/home.module';
import { authGuard } from './Core/Guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home',
  loadChildren: () => import('./Core/Pages/home/home/home.module').then(m => m.HomeModule)},
  {path: 'auth', canActivate: [authGuard],
  loadChildren: () => import('./Core/auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashboard',
  loadChildren: () => import('./Core/Pages/dashboard/dashboard.module').then(m => m.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
