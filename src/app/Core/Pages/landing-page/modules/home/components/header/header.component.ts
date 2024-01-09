import { Component } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public _HelperService:HelperService){}
}
