import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  constructor(private _HomeService:HomeService,
    public _HelperService:HelperService
    ){}
  ngOnInit(): void {
    this.getRoomDetails('65a819a0a5d9953dd42cba77')
  }
  getRoomDetails(id:string){
    this._HomeService.onGetRoomDetails(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }

}
