import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ManageUniversityRoutingModule } from './university-routing.module';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';

@NgModule({
  declarations: [UniversityListComponent, UniversityDetailComponent],
  imports: [
    CommonModule,
    ManageUniversityRoutingModule,
    MaterialModule,
    FormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
})
export class UniversityModule {}
