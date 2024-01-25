import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-must-sign',
  templateUrl: './must-sign.component.html',
  styleUrls: ['./must-sign.component.scss']
})
export class MustSignComponent {
  constructor(
    private dialogRef: MatDialogRef<MustSignComponent>
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
