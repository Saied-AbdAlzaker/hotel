import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from 'src/app/Core/services/helper.service';
import { LogOutComponent } from 'src/app/Shared/navbar/components/log-out/log-out.component';

@Component({
  selector: 'app-nav-land',
  templateUrl: './nav-land.component.html',
  styleUrls: ['./nav-land.component.scss']
})
export class NavLandComponent {
  userName: any = localStorage.getItem('userName');
  userRole:any = localStorage.getItem('role')
  constructor(public _HelperService:HelperService,public dialog: MatDialog,
    ){}
  onChangeLang(lang:string){
    this._HelperService.onchangeLang(lang)
  }
  openDialogLogOut(): void {
    const dialogRef = this.dialog.open(LogOutComponent, {
      data: {},
      width: '30%',
      // height: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
