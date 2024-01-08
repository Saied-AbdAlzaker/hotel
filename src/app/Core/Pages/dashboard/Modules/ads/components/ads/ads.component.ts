import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdsService } from '../../services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { IAds, IAdsData, IAdsResponse } from '../../models/ads';
import { Subject, debounceTime } from 'rxjs';
import { RoomsService } from '../../../rooms/services/rooms.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  tableResponse: IAdsResponse | undefined;
  tableData: IAdsData | undefined;
  adsItems: IAds[] | undefined;
  searchValue: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private dialog: MatDialog,
    private _adsService: AdsService,
    private _toastrService: ToastrService,
    private _roomsService: RoomsService
  ) {}
  ngOnInit() {
    this.getAllAds();
    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllAds();
      },
    });
  }

  getAllAds() {
    this._adsService.getAllAds().subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        this.adsItems= this.tableData?.ads
        console.log(this.adsItems);
      },
    });
  }
  //  // Room By Id
  //  getRoomById(id: string) {
  //   this._roomsService.onGetRoomById(id).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.searchValue = res.data.room.roomNumber
  //     },
  //     error: (err) => {
  //       this._toastrService.error(err.error.message)
  //     },
  //     complete: () => {

  //     }
  //   }
  //   )
  // }

  openAddDialog() {}
  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }
}
