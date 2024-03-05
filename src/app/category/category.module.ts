import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import { CategoryService } from '../shared/services/category.service';



@NgModule({
  declarations: [
    CategoryComponent,
    UpdateCategoryModalComponent,



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CategoryRoutingModule,


  ],
  providers: [CategoryService],
})
export class CategoryModule { }
