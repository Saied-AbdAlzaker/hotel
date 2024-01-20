import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IRoomsUserDetails, IRoomsUser } from '../../models/home';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
 
  roomRespnse: IRoomsUserDetails | undefined;
  roomsData: IRoomsUser[] | any;
  pageNumber: number = 1;
  pageSize: number = 5;
constructor(private _HomeService:HomeService){}

  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(){
    let params={
       size:this.pageSize,
       page:this.pageNumber
    }
    this._HomeService.getAllRooms(params).subscribe({
      next:(res)=>{
        // console.log(res);
        this.roomRespnse=res;
        this.roomsData=this.roomRespnse?.data.rooms;
        console.log(this.roomsData);
        
        
      }     
    })
  }
 
}
