import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './Components/Facilities/facilities.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';

const routes: Routes = [
  {path:'',component:FacilitiesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { 
  
}

