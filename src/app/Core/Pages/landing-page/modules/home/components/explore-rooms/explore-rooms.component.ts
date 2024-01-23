import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUserDetails, IRoomsUser } from '../../models/home';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-explore-rooms',
  templateUrl: './explore-rooms.component.html',
  styleUrls: ['./explore-rooms.component.scss']
})
export class ExploreRoomsComponent implements OnInit {

  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number | undefined = 1;
  totalCount: number = 0;
  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser[] | any;

    constructor(private _homeService: HomeService, private toastr:ToastrService, public _HelperService:HelperService) { }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms(){
    let Params = {
      page: this.pageNumber,
      size: this.pageSize,
    }
    this._homeService.getAllRooms(Params).subscribe({
      next: (res)=>{
        this.roomRespnse = res.data;
        this.roomsData = res.data.rooms;
        console.log(this.roomsData);
      }
    })
  }

  

  // handlePageEvent(e: any) {
  //   this.pageSize = e.pageSize;
  //   this.pageNumber = e.pageIndex + 1;
  //   this.getAllRooms();
  // }

}
