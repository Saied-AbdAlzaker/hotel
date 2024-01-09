import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { AddEditComponent } from './components/add-edit-ads/add-edit-ads.component';


const routes: Routes = [
  {path: '', redirectTo: 'ads', pathMatch: 'full'},
  {path: '', component: AdsComponent},
  {path: 'add', component:AddEditComponent},
  {path: 'edit/:_id', component:AddEditComponent},
  {path: 'view/:_id', component:AddEditComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
