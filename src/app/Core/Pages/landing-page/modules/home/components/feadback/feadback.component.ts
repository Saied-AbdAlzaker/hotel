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
  Reviews:any;
  rate:number=0;

  comment:any;
  constructor(public _HelperService:HelperService,private _HomeService:HomeService,
    private _ActivatedRoute:ActivatedRoute) {

    this.roomId = this._ActivatedRoute.snapshot.params['id'];

  }
ngOnInit(): void {
  this.getAllComments();
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

getAllReviews(){
  this._HomeService.getAllReviews(this.roomId).subscribe({
    next:(res)=>{
      console.log(res);
      this.Reviews=res.data.roomReviews;
      this.rate=this.Reviews[0]?.rating        
    }
    
  })
}

}
