import { Component } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.scss']
})
export class FeadbackComponent {

  roomId:string | any = this._ActivatedRoute.snapshot.params['id']
  roomDetails:any;
  roomImages:any[]=[];
  roomFacilities:any[]=[];
  comments: any;

  comment:any;
  constructor(public _HelperService:HelperService,private _HomeService:HomeService,
    private _ActivatedRoute:ActivatedRoute) {

    this.roomId = this._ActivatedRoute.snapshot.params['id'];

  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllComments();
}
getRoomDetails(id:string){
  this._HomeService.onGetRoomDetails(id).subscribe({
    next:(res)=>{
      this.roomDetails=res.data.room;
      this.roomImages=res.data.room.images
      this.roomFacilities=this.roomDetails.facilities      
    }
  })
}

getAllComments(){
  this._HomeService.getAllComments(this.roomId).subscribe({
     next:(res)=>{
      console.log(res);
      this.comments = res.data.roomComments;
      console.log(this.comments);

     }
  })
}

}
