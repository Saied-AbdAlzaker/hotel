import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HomeLandComponent } from './components/home-land/home-land.component';
import { HeaderComponent } from './components/header/header.component';
import { MostPickedComponent } from './components/most-picked/most-picked.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeadbackComponent } from './components/feadback/feadback.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ExploreRoomsComponent } from './components/explore-rooms/explore-rooms.component';


@NgModule({
  declarations: [
    HomeLandComponent,
    HeaderComponent,
    MostPickedComponent,
    FeaturesComponent,
    FeadbackComponent,
    RoomDetailsComponent,
    FavouritesComponent,
    ExploreRoomsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
