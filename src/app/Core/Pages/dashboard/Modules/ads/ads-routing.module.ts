import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { ViewAdsComponent } from './view-ads/view-ads.component';


const routes: Routes = [
  {path: '', redirectTo: 'ads', pathMatch: 'full'},
  {path: '', component: AdsComponent},
  {path: 'view/:id', component: ViewAdsComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
