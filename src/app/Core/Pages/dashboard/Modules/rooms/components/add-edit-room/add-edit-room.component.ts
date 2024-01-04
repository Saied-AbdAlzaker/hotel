import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { IFacilities } from '../../model/room';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent implements OnInit {

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
    private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.getFacilities()
  }
  
  AddRoom(data:FormGroup){
    let myData = new FormData()
    let myMap = new Map(Object.entries(data.value));
    for(const [key,val] of myMap){
      myData.append(key, data.value[key])
    }
    myData.append('imgs', this.imgSrc, this.imgSrc['name']);
    this._RoomsService.onAddRoom(myData).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        this.toastr.error(err.error.message,'error')
      },complete:()=> {
        this.toastr.success('room added successfully')
      },
    })
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
