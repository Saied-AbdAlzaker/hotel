import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavLandComponent } from './components/nav-land/nav-land.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavLandComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
