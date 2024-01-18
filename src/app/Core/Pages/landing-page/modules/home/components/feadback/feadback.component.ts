import { Component } from '@angular/core';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-feadback',
  templateUrl: './feadback.component.html',
  styleUrls: ['./feadback.component.scss']
})
export class FeadbackComponent {

  constructor(public _HelperService:HelperService) {}

}
