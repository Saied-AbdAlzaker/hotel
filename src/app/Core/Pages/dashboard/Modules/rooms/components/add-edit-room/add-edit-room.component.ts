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
  isViewMode: boolean = true;
  isEditMode: boolean = true;
  isAddMode: boolean = true;
  RoomsId: any;
  files: File[] = [];
  imgSrc: any;
  pathHttps: string = 'https://upskilling-egypt.com:443/';
  facilities: IFacilities[] | any = [];
  facilityId: any[] | undefined = [];
  roomData: any;

  // Form
  roomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null, [Validators.required]),
  })
  constructor(
    private _RoomsService: RoomsService,
    private toastr: ToastrService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.RoomsId = ActivatedRoute.snapshot.params['id'];
    if (this.RoomsId) {
      this.isEditMode = true;
      this.getRoomById(this.RoomsId);
      ActivatedRoute.url.subscribe(url => {
        this.isViewMode = url.some(segment => segment.path === 'view')
        this.disableFormControls()
      })
      this.ActivatedRoute.url.subscribe(url => {
        this.isEditMode = url.some(segment => segment.path === 'edit')
        this.enableFormControls()
      })
    } else {
      this.isAddMode = true;
      this.isEditMode = false;
      this.isViewMode = false
    }

  }

  ngOnInit(): void {
    this.getFacilities();

  }


  // Disable Formm
  disableFormControls() {
    if (this.isViewMode) {
      this.roomForm.get('roomNumber')?.disable();
      this.roomForm.get('price')?.disable();
      this.roomForm.get('capacity')?.disable();
      this.roomForm.get('discount')?.disable();
      this.roomForm.get('facilities')?.disable();
      this.roomForm.get('imgs')?.disable();
    }
  }
  // Enable Form
  enableFormControls() {
    if (this.isEditMode) {
      this.roomForm.get('roomNumber')?.enable();
      this.roomForm.get('price')?.enable();
      this.roomForm.get('capacity')?.enable();
      this.roomForm.get('discount')?.enable();
      this.roomForm.get('facilities')?.enable();
      this.roomForm.get('imgs')?.enable();

    }
  }

  // On Submit Form
  onSubmit(data: FormGroup) {
    let myData = new FormData();
    myData.append('roomNumber', data.value.roomNumber);
    myData.append('price', data.value.price);
    myData.append('capacity', data.value.capacity);
    myData.append('discount', data.value.discount);
    for (const f of data.value.facilities) {
      myData.append('facilities', f._id); //not f its f._id
    }
    // myData.append('imgs', this.imgSrc, this.imgSrc.name);
    for (const m of this.imgSrc) {
      myData.append('imgs', m, m.name);
    }
    console.log(this.imgSrc)
    console.log(data.value);
    if (this.RoomsId) {
      this._RoomsService.editRooms(myData, this.RoomsId).subscribe({
        next: (res) => {
          console.log(res);
        }, error: (err) => {

          this.toastr.error(err.error.message, 'failed');
        }, complete: () => {
          this.router.navigate(['/dashboard/rooms'])
          this.toastr.success('Rooms Updated Successfully');
        }
      })
    } else {
      this._RoomsService.onAddRoom(myData).subscribe({
        next: (res) => {
          console.log(res);
        }, error: (err) => {
          this.toastr.error(err.error.message, 'Faild');
        }, complete: () => {
          this.router.navigate(['dashboard/rooms'])
          this.toastr.success('Room Added Successfully');
        }
      })
    }
  }

  // Facilities
  getFacilities() {
    this._RoomsService.onGetFacilities().subscribe({
      next: (res: any) => {
        console.log(res);
        this.facilities = res.data?.facilities
        console.log(this.facilities);
      }
    })
  }

  // Room By Id
  getRoomById(id: string) {
    this._RoomsService.onGetRoomById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.roomData = res.data.room;
      },
      error: (err) => {
        this.toastr.error(err.error.message)
      },
      complete: () => {
        console.log(this.roomData.facilities);
        if (this.roomData?.facilities) {
          this.roomData.facilities.forEach((facility: any) => {
            return this.facilities.push(facility);
          });
          // for (let i = 0; i < this.roomData.facilities.length; i++) {
          //  this.facilities?.push[this.roomData.facilities[i]]
          // }
        };
        console.log(this.facilities);
        this.imgSrc = this.roomData?.images,
          this.roomForm.patchValue({
            roomNumber: this.roomData?.roomNumber,
            price: this.roomData?.price,
            capacity: this.roomData?.capacity,
            discount: this.roomData?.discount,
            facilities: this.roomData.facilities
          });
      }
    }
    )
  }

  // ngx-dropzone


  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles;
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      console.log(base64String);

    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
