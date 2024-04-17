import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourceComponent } from './ressource.component';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';




const routes: Routes = [
    {
        path: 'ressource',
        component: RessourceComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'

            },
            {
                path: 'list',
                component: RessourceListComponent,
            },
            // {
            //     path: 'manage/:id',
            //     component: ManageCategoryComponent,
            // },
            {
                path: 'add',
                component: AddRessourceComponent,
            },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RessourceRoutingModule { }