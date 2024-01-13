import { NgModule } from '@angular/core';
import { AdsRoutingModule } from './ads-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './components/ads/ads.component';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';
import { AddEditComponent } from './components/add-edit-ads/add-edit-ads.component';


@NgModule({
  declarations: [
    AdsComponent,
    ViewAdsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
