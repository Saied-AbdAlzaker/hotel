import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IlistTable, IlistUser } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  
  listUses: IlistUser[] | undefined = [];
  tableResponse: IlistTable | undefined;
  constructor(private _UsersService: UsersService) { }

  ngOnInit() {
    this.onGetAllUsers();
  }
  onGetAllUsers() {

    let params = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    }
    this._UsersService.geAllUsers(params).subscribe({
      next: (res: any) => {
        this.tableResponse = res.data;

        this.listUses = res.data.users;


      }
    })
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;

  }


}
