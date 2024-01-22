import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUserDetails, IRoomsUser } from '../../models/home';
import { IAdsUser, IAdsUserDetails } from '../../models/Ads';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser[] | any;
  AdsResponse: IAdsUserDetails | undefined;
  AdsData: IAdsUser[] | any;
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private _HomeService: HomeService, private el: ElementRef, public _HelperService:HelperService ) { }

  @HostListener("error")
  private onError() {
    this.el.nativeElement.style.display = "none";
  }

  ngOnInit(): void {
    this.getAllRooms();
    this.getAllads();
  }


  getAllRooms() {
    let params = {
      size: this.pageSize,
      page: this.pageNumber
    }
    this._HomeService.getAllRooms(params).subscribe({
      next: (res) => {
        // console.log(res);
        this.roomRespnse = res;
        this.roomsData = this.roomRespnse?.data.rooms;
        console.log(this.roomsData);


      }
    })
  }

  getAllads() {
    this._HomeService.getAllAds().subscribe({
      next: (res) => {
        console.log(res);
        this.AdsResponse = res;
        this.AdsData = this.AdsResponse?.data.ads;
        console.log(this.AdsData);



      }
    })
  }
}
