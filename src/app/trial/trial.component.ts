import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './DialogExample.component';
@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  name1 = "Pradeep";

  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    var prad;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data:this.name1
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      console.log(dialogRef.componentInstance.animal);
      
    });



  
  }

  ngOnInit() {
  }

}
