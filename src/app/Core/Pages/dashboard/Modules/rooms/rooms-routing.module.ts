import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';

const routes: Routes = [
  {path: '', component: RoomsComponent},
  {path: 'add', component: AddEditRoomComponent},
  {path: 'edit/:_id', component: AddEditRoomComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
