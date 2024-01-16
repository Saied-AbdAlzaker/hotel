import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandComponent } from './components/home-land/home-land.component';
import { HeaderComponent } from './components/header/header.component';
import { MostPickedComponent } from './components/most-picked/most-picked.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeadbackComponent } from './components/feadback/feadback.component';


@NgModule({
  declarations: [
    HomeLandComponent,
    HeaderComponent,
    MostPickedComponent,
    FeaturesComponent,
    FeadbackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
