import { UsersModule } from './Modules/users/users.module';
import { RoomsComponent } from './Modules/rooms/rooms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './Modules/users/users.component';
import { BookingsModule } from './Modules/bookings/bookings.module';
import { HomeModule } from './Modules/home/home.module';
import { RoomsModule } from './Modules/rooms/rooms.module';
import { AdsModule } from './Modules/ads/ads.module';

const routes: Routes = [
  {path:'',component:DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home', 
      loadChildren: () => import('../dashboard/Modules/home/home.module').then(mod => mod.HomeModule),
    },
    {
      path: 'users', 
      loadChildren: () => import('../dashboard/Modules/users/users.module').then(mod => mod.UsersModule),
    },
    {
      path: 'rooms', 
      loadChildren: () => import('../dashboard/Modules/rooms/rooms.module').then(mod => mod.RoomsModule),
    },
    {
      path: 'ads', 
      loadChildren: () => import('../dashboard/Modules/ads/ads.module').then(mod => mod.AdsModule),
    },
    {
      path: 'booking', 
      loadChildren: () => import('../dashboard/Modules/bookings/bookings.module').then(mod => mod.BookingsModule),
    },
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
