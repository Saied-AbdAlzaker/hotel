import { UsersModule } from './Modules/users/users.module';
import { RoomsComponent } from './Modules/rooms/components/rooms/rooms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './Modules/users/components/users/users.component';
import { BookingsModule } from './Modules/bookings/bookings.module';
import { HomeModule } from './Modules/home/home.module';
import { RoomsModule } from './Modules/rooms/rooms.module';
import { AdsModule } from './Modules/ads/ads.module';
import { ProfileComponent } from 'src/app/Shared/profile/profile.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home',  data: { title: 'Home' },
      loadChildren: () => import('../dashboard/Modules/home/home.module').then(mod => mod.HomeModule),
    },
    {
      path: 'users',  data: { title: 'Users' },
      loadChildren: () => import('../dashboard/Modules/users/users.module').then(mod => mod.UsersModule),
    },
    {
      path: 'rooms',  data: { title: 'Rooms' },
      loadChildren: () => import('../dashboard/Modules/rooms/rooms.module').then(mod => mod.RoomsModule),
    },
    {
      path: 'ads',  data: { title: 'Ads' },
      loadChildren: () => import('../dashboard/Modules/ads/ads.module').then(mod => mod.AdsModule),
    },
    {
      path: 'booking',  data: { title: 'Booking' },
      loadChildren: () => import('../dashboard/Modules/bookings/bookings.module').then(mod => mod.BookingsModule),
    },
    {
      path: 'Facilities',  data: { title: 'Facilities' },
      loadChildren: () => import('../dashboard/Modules/facilities/facilities.module').then(mod => mod.FacilitiesModule),
    },
    {path:'profile', component:ProfileComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
