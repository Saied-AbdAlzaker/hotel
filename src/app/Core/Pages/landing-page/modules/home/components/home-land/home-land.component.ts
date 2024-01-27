import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.component.html',
  styleUrls: ['./home-land.component.scss']
})
export class HomeLandComponent implements OnInit {

  page: number = 1;
  size: number = 10;
  tableResponse: any;
  listRooms: any;
  constructor(private _HomeService: HomeService) {

  }
  ngOnInit(): void {
    this.getALLRooms();
  }

  getALLRooms() {
    let params = {
      page: this.page,
      size: this.size
    }
    this._HomeService.getAllRooms(params).subscribe({
      next: (res) => {
        this.tableResponse = res.data;
        this.tableResponse = res.data.rooms.image;

      }
    })
  }
}
