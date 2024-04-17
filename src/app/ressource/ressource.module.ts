import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourceComponent } from './ressource.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RessourceRoutingModule } from './ressource-routing.module';

import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { ManageRessourceComponent } from './manage-ressource/manage-ressource.component';
import { ViewRessourceComponent } from './view-ressource/view-ressource.component';
//import { MaterialFileInputModule } from 'ngx-material-file-input';





@NgModule({
  declarations: [
    RessourceComponent,

    AddRessourceComponent,
    RessourceListComponent,
    ManageRessourceComponent,
    ViewRessourceComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RessourceRoutingModule,
    ReactiveFormsModule,

  ]
})
export class RessourceModule { }
