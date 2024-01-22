import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/auth/Services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  isUser: boolean = false;
  isAdmin: boolean = false;
  constructor(private _authService:AuthService) {}
  ngOnInit(
  ) {
    this.isAdminRole();
  }
  isAdminRole(){
    if(localStorage.getItem('role') == 'admin'){
     return this.isAdmin =true
    }else{
      return this.isUser=true;
    }
    }
}
