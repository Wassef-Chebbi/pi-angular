import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './services/category.service';
import { RessourceService } from './services/ressource.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CategoryService, RessourceService]
})
export class SharedModule { }
