import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

import { CategoryService } from '../shared/services/category.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ManageCategoryComponent,
    AddCategoryComponent,
    CategoryListComponent,



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
