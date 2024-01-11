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

  pageNumber: number = 1;
  pageSize: number = 5;
  listUses: IlistUser[] | undefined = [];
  tableResponse: IlistTable | undefined;
  constructor(private _UsersService: UsersService) { }

  ngOnInit() {
    this.onGetAllUsers();
  }

  onGetAllUsers() {
    let params = {
      page: this.pageNumber,
      size: this.pageSize
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
    this.onGetAllUsers();

  }


}
