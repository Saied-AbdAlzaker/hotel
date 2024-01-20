import { EditAdsComponent } from './../edit-ads/edit-ads.component';
import { Component, Inject, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { IAds, IAdsData, IAdsResponse } from '../../models/ads';
import { Subject, debounceTime } from 'rxjs';
import { ViewAdsComponent } from '../view-ads/view-ads.component';
import { DeleteDialogComponent } from 'src/app/Shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddAdsComponent } from '../add-ads/add-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number = 1;
  totalCount: number = 0;

  tableResponse: IAdsResponse | undefined;
  tableData: IAdsData | undefined;
  adsItems: IAds[] | undefined;
  searchValue: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private dialog: MatDialog,
    private _adsService: AdsService,
    private _toastrService: ToastrService,) { 
    this.getAllAds();

     }

  ngOnInit() {
    // this.getAllAds();
    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllAds();
      },
    });
  }
  // All Ads
  getAllAds() {
    let parms = {
      totalCount: this.totalCount,
      page: this.pageNumber,
      size: this.pageSize
    }
    this._adsService.getAllAds(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        this.adsItems = this.tableData?.ads
        console.log(this.adsItems);
      },
    });
  }
  // Search
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }
  // Add 
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddAdsComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      this.getAllAds();
    });
  }


  // Edit 
  openEditDialog(adsData: any): void {
    console.log(adsData);

    const dialogRef = this.dialog.open(EditAdsComponent, {
      data: adsData,
      width: '40%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllAds();
    });
  }

  // Delete 
  openDeleteDialog(roomData: any): void {
    console.log(roomData);

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: roomData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.deleteAds(result._id);
      }
    });
  }

  deleteAds(id: string) {
    this._adsService.onDeleteAds(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._toastrService.error(err.error.message, 'Error!');
        console.log(err);
      },
      complete: () => {
        this._toastrService.success('Ads Deleted Successfully', 'Ok');
        this.getAllAds();
      },
    });
  }
  // View
  openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string, adsItems: IAds): void {
    this.dialog.open(ViewAdsComponent,
      {
        data: adsItems,
        width: '40%',
        enterAnimationDuration,
        exitAnimationDuration,
      });
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllAds();
  }



}
