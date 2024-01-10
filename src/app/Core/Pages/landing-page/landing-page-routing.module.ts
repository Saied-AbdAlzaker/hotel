import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { title: 'Home' },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../landing-page/modules/home/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('../landing-page/modules/booking/booking.module').then(
            (mod) => mod.BookingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
