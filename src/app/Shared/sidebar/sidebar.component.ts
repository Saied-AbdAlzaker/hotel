import { Component } from '@angular/core';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LogOutComponent } from './components/log-out/log-out.component';
interface IMenu {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-1x fa-house',
      link: '/dashboard/home',
    },
    {
      title: 'Users',
      icon: 'fa-solid fa-users',
      link: '/dashboard/users',
    },
    {
      title: 'Rooms',
      icon: 'fa-solid fa-list-check',
      link: '/dashboard/rooms',
    },
    {
      title: 'Ads',
      icon: 'fa-solid fa-calendar-days',
      link: '/dashboard/ads',
    },
    {
      title: 'Booking',
      icon: 'fa-solid fa-bookmark',
      link: '/dashboard/booking',
    }
  ];
  openDialogCahngePassword(): void {

  }
  openDialogLogOut(): void {


  }
}
