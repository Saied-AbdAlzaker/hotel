import { RoomsComponent } from './../../../dashboard/Modules/rooms/components/rooms/rooms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandComponent } from './components/home-land/home-land.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { userGuard } from 'src/app/Core/Guards/user.guard';
import { authGuard } from 'src/app/Core/Guards/auth.guard';
import { FeadbackComponent } from './components/feadback/feadback.component';
import { ExploreRoomsComponent } from './components/explore-rooms/explore-rooms.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
const routes: Routes = [
  {path:'',component:HomeLandComponent},
  {path:'rooms/:id',component:RoomDetailsComponent},
  {path:'rooms/:id',component:RoomDetailsComponent,data: { title: 'Room' }},
  {path:'feadback',component:FeadbackComponent,data: { title: 'Feadback' }},
  {path:'rooms',component:ExploreRoomsComponent, data: { title: 'Rooms' }},
  {path:'yourProfile',component:UserProfileComponent,canActivate:[authGuard,userGuard], data: { title: 'Your Profile' }},
  {path:'favourites',component:FavouritesComponent,canActivate:[authGuard,userGuard],data: { title: 'Your Favourites' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
