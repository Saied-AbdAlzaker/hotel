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
      icon: 'fa-solid fa-1x fa-house',
      link: '/dashboard/users',
    },
    {
      title: 'Ads',
      icon: 'fa-solid fa-1x fa-house',
      link: '/dashboard/ads',
    },
    {
      title: 'Booking',
      icon: 'fa-solid fa-1x fa-house',
      link: '/dashboard/booking',
    }
  ];
  openDialogCahngePassword(): void {

  }
  openDialogLogOut(): void {


  }
}
