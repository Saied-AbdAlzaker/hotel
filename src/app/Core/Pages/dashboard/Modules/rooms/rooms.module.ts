import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';

const routes: Routes = [
  {path: '', component: RoomsComponent},
  {path: 'add/:id', component: AddEditRoomComponent},
  {path: 'edit/:id', component: AddEditRoomComponent},


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RoomsComponent, AddEditRoomComponent,ViewRoomsComponent]
})
export class RoomsModule { }