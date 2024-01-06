import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';


const routes: Routes = [
  {path: '', redirectTo: 'ads', pathMatch: 'full'},
  {path: '', component: AdsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
