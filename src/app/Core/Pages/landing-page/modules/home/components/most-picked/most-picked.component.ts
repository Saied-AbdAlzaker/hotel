import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';
import { HomeService } from '../../services/home.service';
import { IRoomsUser, IRoomsUserDetails } from '../../models/home';

@Component({
  selector: 'app-most-picked',
  templateUrl: './most-picked.component.html',
  styleUrls: ['./most-picked.component.scss'],
})
export class MostPickedComponent implements OnInit {
  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser[] | any;
  pageNumber: number = 1;
  pageSize: number = 5;
  constructor(
    public _HelperService: HelperService,
    private _homeService: HomeService
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
        console.log(res);
        this.roomRespnse= res;
        this.roomsData= this.roomRespnse?.data.rooms
        console.log(this.roomsData);

      },
    });
  }
}
