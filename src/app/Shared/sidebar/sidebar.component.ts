import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../navbar/components/change-password/change-password.component';
import { LogOutComponent } from '../navbar/components/log-out/log-out.component';
import { MatDialog } from '@angular/material/dialog';
import { UserAdminService } from '../services/user-admin.service';
import { IChangePassword } from '../models/iuser-admin';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/Core/services/helper.service';

interface IMenu {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isDarkMode: boolean;

  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened: boolean = true;
  constructor(
    private Router: Router,
    public dialog: MatDialog,
    private _userAdminService: UserAdminService,
    private toastr: ToastrService,
    private _HelperService:HelperService

  ) {
    this.isDarkMode = this._HelperService.isDarkMode();

  }
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid  fa-house',
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
    },
    {
      title: 'Facilities',
      icon: 'fa-solid fa-hand-holding-heart',
      link: '/dashboard/Facilities',
    },
  ];

  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened)
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this._HelperService.setDarkMode(this.isDarkMode);
  }

}
