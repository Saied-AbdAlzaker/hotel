import { Component } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-nav-land',
  templateUrl: './nav-land.component.html',
  styleUrls: ['./nav-land.component.scss']
})
export class NavLandComponent {
  constructor(public _HelperService:HelperService){}
  onChangeLang(lang:string){
    this._HelperService.onchangeLang(lang)
  }
}
