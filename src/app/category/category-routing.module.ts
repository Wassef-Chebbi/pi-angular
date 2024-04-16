import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';



const routes: Routes = [
    {
        path: 'categories',
        component: CategoryComponent,

    },
    {
        path: 'add',
        component: AddCategoryComponent,
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }