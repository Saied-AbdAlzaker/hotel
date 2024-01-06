import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { IFacilities } from '../../model/room';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit {

  RoomsId: any;
  isUpdatePage: boolean = false;
  files: File[] = [];
  imgSrc: any;
  pathHttps: string = 'https://upskilling-egypt.com:443/';
  facilities: IFacilities[]|undefined=[];
  facilityId:any[]=[];
  roomForm = new FormGroup({
    roomNumber: new FormControl(null,[Validators.required]),
    // imgs: new FormControl(null,[Validators.required]),
    price: new FormControl(null,[Validators.required]),
    capacity: new FormControl(null,[Validators.required]),
    discount: new FormControl(null,[Validators.required]),
    facilities: new FormControl(null,[Validators.required]),
  })

  constructor(
    private _RoomsService:RoomsService,
    private toastr:ToastrService,private _ActivatedRoute:ActivatedRoute,private router:Router
     
  ){
    this.RoomsId=_ActivatedRoute.snapshot.params['id'];
    if(this.RoomsId){
      this.isUpdatePage=true;
    }else{
      this.isUpdatePage=false;
    }
  }
  ngOnInit(): void {
    this.getFacilities()
  }
  
  onSubmit(data: FormGroup) {
    if (this.RoomsId) {
      this._RoomsService.editRooms(data.value, this.RoomsId).subscribe({
        next: (res) => {
          console.log(res);
        }, error: (err) => {

          this.toastr.error('upate failed');
        }, complete: () => {

          this.router.navigate(['/dashboard/rooms'])
          this.toastr.success('Rooms Updated Successfully');
        }
      })
    } else {
      // Add
      // console.log(data.value);
      this._RoomsService.onAddRoom(data.value).subscribe({
        next: (res) => {
          console.log(res);

        }, error: (err) => {

          this.toastr.error(err.error.message, 'Error');
        }, complete: () => {
          this.router.navigate(['dashboard/rooms'])
          this.toastr.success('rooms Added Successfully');

        }
      })
    }
  }

 
  getFacilities(){
    this._RoomsService.onGetFacilities().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.facilities=res.data.facilities
        console.log(this.facilities);        
      }
    })
  }

onSelect(event:any) {
  console.log(event);
  this.imgSrc= event.addedFiles[0];
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
