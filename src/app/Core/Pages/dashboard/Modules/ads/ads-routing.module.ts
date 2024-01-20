import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { EditAdsComponent } from './components/edit-ads/edit-ads.component';

const routes: Routes = [
  {path: '', redirectTo: 'ads', pathMatch: 'full'},
  {path: '', component: AdsComponent},
  {path: 'view/:id', component: ViewAdsComponent},

  {path: 'add', component:AddAdsComponent},
  {path: 'edit/:_id', component:EditAdsComponent},
  {path: 'view/:_id', component:ViewAdsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
