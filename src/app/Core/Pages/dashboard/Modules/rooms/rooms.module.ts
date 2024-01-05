import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent,
    ViewRoomsComponent,

  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
