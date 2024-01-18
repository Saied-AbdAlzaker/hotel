import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.component.html',
  styleUrls: ['./home-land.component.scss']
})
export class HomeLandComponent {

  page:number=1;
  size:number=10;
    constructor(private _HomeService:HomeService){
  
    }
  getALLRooms(){
    let params={
      page:this.page,
      size:this.size
    }
    this._HomeService.getAllRooms(params).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
