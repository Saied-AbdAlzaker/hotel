import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUser, IRoomsUserDetails } from '../../models/home';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  size:number=10;
  page:number=1;
  roomResponse:IRoomsUserDetails|undefined;
  rooms: IRoomsUser[] | any;

constructor(private _HomeService:HomeService){}
  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(){
    let params={
       size:this.size,
       page:this.page
    }
    this._HomeService.getAllRooms(params).subscribe({
      next:(res)=>{
        console.log(res);
        this.roomResponse=res.data;
        this.rooms=this.roomResponse?.data.rooms;
        
      }     
    })
  }
 
}
