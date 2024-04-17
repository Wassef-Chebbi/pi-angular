import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { CategoryListComponent } from './category-list/category-list.component';



const routes: Routes = [
    {
        // path: 'category',
        // component: CategoryComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'list',
        //         pathMatch: 'full'

        //     },
        //     {
        //         path: 'list',
        //         component: CategoryListComponent,
        //     },
        //     {
        //         path: 'manage/:id',
        //         component: ManageCategoryComponent,
        //     },
        //     {
        //         path: 'add',
        //         component: AddCategoryComponent,
        //     },


        // ]
        path: 'admin/category',
        component: CategoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: CategoryListComponent,
            },
            {
                path: 'manage/:id',
                component: ManageCategoryComponent,
            },
            {
                path: 'add',
                component: AddCategoryComponent,
            },
        ]

    },

    {
        path: 'user/category',
        component: CategoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: CategoryListComponent,
            }]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }