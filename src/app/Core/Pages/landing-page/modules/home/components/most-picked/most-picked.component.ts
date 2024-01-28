import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';
import { HomeService } from '../../services/home.service';
import { IRoomsUser, IRoomsUserDetails } from '../../models/home';
import {
  IAds,
  IAdsData,
  IAdsResponse,
} from 'src/app/Core/Pages/dashboard/Modules/ads/models/ads';
import { FavouriteService } from '../../services/favourite.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MustSignComponent } from 'src/app/Shared/must-sign/must-sign.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-most-picked',
  templateUrl: './most-picked.component.html',
  styleUrls: ['./most-picked.component.scss'],
})
export class MostPickedComponent implements OnInit {
  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser[] | any;
  adsRespnse: IAdsResponse | undefined;
  adsData: IAdsData | any;
  adsItems: IAds[] | undefined;
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(
    public _HelperService: HelperService,
    private _homeService: HomeService,
    private _favouriteService: FavouriteService,
    private _toastrService: ToastrService,
    private _router: Router,
    private nzMessageService: NzMessageService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms() {
    let params = {
      page: this.pageNumber,
      size: this.pageSize,
    };
    return this._homeService.getAllRooms(params).subscribe({
      next: (res) => {
        this.roomRespnse = res;
        this.roomsData = this.roomRespnse?.data.rooms;
      },
    });
  }
  getAllAds() {
    return this._homeService.getAllAds().subscribe({
      next: (res) => {
        this.adsRespnse = res;
        this.adsData = this.adsRespnse?.data;
        this.adsItems = this.adsData.ads;
      },
    });
  }
  cancel(): void {
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
  addFavouriteById(roomId: string) {
    if (!localStorage.getItem('role')) {
      this.openDialogMustSign();

    }

    return this._favouriteService.addFavourite(roomId).subscribe({
      next: (res) => {
      },
      error: (err) => {
        if (
          err.error.message == `Room is already in your favorite: ${roomId}`
        ) {
          this._toastrService.error('Room is already in your favorite');
        } else {

        }
      },
      complete: () => {
        this._toastrService.success('Room added to favorites successfully');
      },
    });
  }

  openDialogMustSign(): void {
    const dialogRef = this.dialog.open(MustSignComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
