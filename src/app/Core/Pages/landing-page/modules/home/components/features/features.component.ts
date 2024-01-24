import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUserDetails, IRoomsUser } from '../../models/home';
import { IAdsUser, IAdsUserDetails } from '../../models/Ads';
import { HelperService } from 'src/app/Core/services/helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  pageSize: number = 4;

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
        // this.roomRespnse = res;
        this.roomsData = res.data.rooms;

      }
    })
  }

  getAllads() {
    this._HomeService.getAllAds().subscribe({
      next: (res) => {
        this.AdsData = res.data.ads;
        // this. = this.AdsResponse;

      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
