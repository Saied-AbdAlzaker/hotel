import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUserDetails, IRoomsUser } from '../../models/home';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/Core/services/helper.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-explore-rooms',
  templateUrl: './explore-rooms.component.html',
  styleUrls: ['./explore-rooms.component.scss'],
})
export class ExploreRoomsComponent implements OnInit {
  startDate: Date | null = null;
  endDate: Date | null = null;
  capacity: number = 1;
  pageIndex: number = 1;
  pageSize: number = 12;
  pageNumber: number | undefined = 1;
  totalCount: number = 0;
  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser | any;

  constructor(
    private _homeService: HomeService,
    private toastr: ToastrService,
    public _HelperService: HelperService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.capacity = params['capacity'];
    });
  }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    
    let params = {};

    if (this.startDate == null) {
      params = {
        page: this.pageNumber,
        size: this.pageSize,
      };
    } else if (this.startDate !== null) {
      params = {
        page: this.pageNumber,
        size: this.pageSize,
        startDate: this.startDate,
        endDate: this.endDate,
        capacity: this.capacity,
      };
    }
    this._homeService.getAllRooms(params).subscribe({
      next: (res) => {
        this.roomRespnse = res.data;
        this.roomsData = res.data.rooms;
        this.totalCount = res.data.totalCount;
      },
    });
  }


  onPageIndexChange(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();

    
  }

  //ant design pagenation
  declarePageIndex(pageIndex:number){
    this.pageNumber = pageIndex;
    this.getAllRooms();
  }
}
