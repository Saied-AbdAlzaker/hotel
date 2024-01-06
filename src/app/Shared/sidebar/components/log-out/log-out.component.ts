import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {
  constructor(
    private Router:Router,
    public dialog: MatDialog
     ) {}
logout(){
  localStorage.removeItem('userToken');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail')
  localStorage.removeItem('loglevel')
  this.Router.navigate(['/auth'])
}
}
