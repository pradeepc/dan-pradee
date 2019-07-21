import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MatButtonModule, 
  MatToolbarModule,
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule, 
  ShowOnDirtyErrorStateMatcher, 
  MatStepperModule  } from '@angular/material';
 
import {MatFormFieldModule} from '@angular/material/form-field';//dashboard,website
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import{MatChipsModule} from '@angular/material';
import{MatTabsModule} from '@angular/material';
 
import {MatTooltipModule} from '@angular/material/tooltip';
 
@NgModule({
  imports: [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule, 
      MatProgressSpinnerModule, 
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSidenavModule,
      MatListModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatStepperModule,
      MatChipsModule,
      MatTabsModule,
      MatTooltipModule
    ],
  exports: [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule, 
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSidenavModule,
      MatListModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatStepperModule,
      MatChipsModule,
      MatTabsModule,
      MatTooltipModule
    ],
    providers: [
      {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ]
})
export class MaterialModule { }