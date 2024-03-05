import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ClubRoutingModule } from './club-routing.module';

import { ClubListDashComponent } from './club-list-dash/club-list-dash.component';

@NgModule({
  declarations: [ClubListDashComponent],
  imports: [
    CommonModule,
    ClubRoutingModule,
    MaterialModule,
    FormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
  providers: [
    DatePipe,
    // ...
  ],
})
export class ClubModule {}
