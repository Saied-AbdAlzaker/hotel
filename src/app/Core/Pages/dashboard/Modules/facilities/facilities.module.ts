import { AddEditComponent } from './Components/Facilities/add-edit/add-edit.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './Components/Facilities/facilities.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }
