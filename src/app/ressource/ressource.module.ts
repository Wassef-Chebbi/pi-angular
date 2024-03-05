import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourceComponent } from './ressource.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RessourceRoutingModule } from './ressource-routing.module';
import { RessourceModalComponent } from './ressource-modal/ressource-modal.component';




@NgModule({
  declarations: [
    RessourceComponent,
    RessourceModalComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RessourceRoutingModule,
    ReactiveFormsModule
  ]
})
export class RessourceModule { }
