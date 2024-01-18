import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandComponent } from './components/home-land/home-land.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  {path:'',component:HomeLandComponent},
  {path:'rooms/:id',component:RoomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
