import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../../services/favourite.service';
import {
  IFavouriteData,
  IFavouriteResponse,
  IFavouriteRooms,
} from '../../models/ifavourite';
import { ToastrService } from 'ngx-toastr';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favouritesResponse: IFavouriteResponse | undefined;
  favouriteData: IFavouriteData | undefined;
  favouriteItems: IFavouriteRooms | any;
  constructor(
    private _favouriteService: FavouriteService,
    private dialog: MatDialog,
    private _toastrService: ToastrService,
    public _HelperService: HelperService,

  ) {}
  ngOnInit(): void {
    this.getAllFavourites();
  }
  getAllFavourites() {
    return this._favouriteService.getMyFavourites().subscribe({
      next: (res: IFavouriteResponse) => {
        this.favouritesResponse = res;
        this.favouriteData = this.favouritesResponse?.data;
        this.favouriteItems = this.favouriteData?.favoriteRooms[0].rooms;
      },
    });
  }
  // Delete
  openDeleteDialog(roomData: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: roomData,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteFavouriteById(result._id);
      }
    });
  }
  deleteFavouriteById(roomId: string) {
    return this._favouriteService.deleteFavourite(roomId).subscribe({
      next: (res) => {
      },
      error: (err) => {
        this._toastrService.error(err.error.message, '');
      },
      complete: () => {
        this._toastrService.success(
          'Room deleted from favourites successfully'
        );
        this.getAllFavourites();
      },
    });
  }
}
