import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './Components/facilities.component';
import { AddEditComponent } from './Components/Facilities/add-edit/add-edit.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule
  ]
})
export class FacilitiesModule { }
