import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: '', component: RoomsComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RoomsComponent]
})
export class RoomsModule { }
