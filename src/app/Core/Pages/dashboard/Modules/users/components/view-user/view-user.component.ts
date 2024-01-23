import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IlistUser } from '../../model/users';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/Shared/models/iuser-admin';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userData: IUser|undefined;
  userId: string;
  constructor(
    private _UsersService:UsersService,
    private _ActivatedRoute:ActivatedRoute
  ){
    this.userId = _ActivatedRoute.snapshot.params['id']
    this.getUserProfile(this.userId);
  }
  ngOnInit(): void {  }
  getUserProfile(id:string){
    this._UsersService.onGetUserProfile(id).subscribe({
      next:(res)=>{        
        this.userData=res.data.user
        console.log(this.userData);
        
      }
    })
  }

}
