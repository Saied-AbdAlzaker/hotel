import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IChangePassword } from 'src/app/Shared/models/iuser-admin';
import { ChangePasswordComponent } from 'src/app/Shared/navbar/components/change-password/change-password.component';
import { HomeService } from '../../services/home.service';
import {
  IMyBookings,
  IRoomsUser,
  IUserProfile,
  MyBookingsResponse,
} from '../../models/home';
import { UsersService } from 'src/app/Core/Pages/dashboard/Modules/users/services/users.service';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { IFacilities } from 'src/app/Core/Pages/dashboard/Modules/rooms/model/room';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit,AfterViewInit {
  userId: any = localStorage.getItem('userId');
  userProfile: IUserProfile | any;
  mybookingsResponse: MyBookingsResponse | any;
  mybookingsData: IMyBookings[] | any;
  bookingsId: string[] =[];
  roomDetails: IRoomsUser|undefined;
  roomImages: string[] = [];
  roomFacilities: IFacilities[] |undefined= [];
  roomDiscount: any;
  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private _homeService: HomeService,
    private _UsersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUserProfile(this.userId);
    this.getAllMyBookings();

    }
    ngAfterViewInit() {

  }
  getUserProfile(id: string) {
    this._homeService.getUserById(id).subscribe({
      next: (res) => {
        this.userProfile = res.data.user;
      },
    });
  }

  openDialogCahngePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
      }
    });
  }


  getAllMyBookings() {
    return this._homeService.getAllMyBookings().subscribe({
      next: (res) => {
        this.mybookingsResponse = res;
        this.mybookingsData = this.mybookingsResponse.data.myBooking;
        this.mybookingsData.forEach((booking: IMyBookings) => {
          this._homeService.onGetRoomDetails(booking.room).subscribe({
            next:(res)=>{
              this.roomDetails = res.data.room;
              this.roomImages = res.data.room.images;
              booking.roomImage= this.roomImages;
              this.roomFacilities = this.roomDetails?.facilities;
              this.roomDiscount = this.roomDetails?.discount
            }
          })
        });


      },
    });
  }
  getBookingDetails(bookingId: string) {
    return this._homeService.getBookingDetails(bookingId).subscribe({
      next: (res) => {
      },
    });
  }
  getRoomDetails(id: string) {
    this._homeService.onGetRoomDetails(id).subscribe({
      next: (res) => {
        this.roomDetails = res.data.room;
        this.roomImages = res.data.room.images;
        this.roomFacilities = this.roomDetails?.facilities;
        this.roomDiscount = this.roomDetails?.discount
      },
    });
  }
}
