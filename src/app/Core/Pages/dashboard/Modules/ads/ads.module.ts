import { NgModule } from '@angular/core';
import { AdsRoutingModule } from './ads-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './components/ads/ads.component';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { EditAdsComponent } from './components/edit-ads/edit-ads.component';


@NgModule({
  declarations: [
    AdsComponent,
    ViewAdsComponent,
    AddAdsComponent,
    EditAdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
