import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../../services/favourite.service';
import {
  IFavouriteData,
  IFavouriteResponse,
  IFavouriteRooms,
} from '../../models/ifavourite';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favouritesResponse: IFavouriteResponse | undefined;
  favouriteData: IFavouriteData | undefined;
  favouriteItems: IFavouriteRooms | any;
  constructor(private _favouriteService: FavouriteService) {}
  ngOnInit(): void {
    this.getAllFavourites();
  }
  getAllFavourites() {
    return this._favouriteService.getMyFavourites().subscribe({
      next: (res: IFavouriteResponse) => {
        console.log(res);
        this.favouritesResponse = res;
        this.favouriteData = this.favouritesResponse?.data;
        this.favouriteItems = this.favouriteData?.favoriteRooms[0].rooms;
        console.log(this.favouriteItems);
      },
    });
  }
}
