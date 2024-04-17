import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourceComponent } from './ressource.component';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { ManageRessourceComponent } from './manage-ressource/manage-ressource.component';
import { ViewRessourceComponent } from './view-ressource/view-ressource.component';



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
            {
                path: 'manage/:id',
                component: ManageRessourceComponent,
            },
            {
                path: 'add',
                component: AddRessourceComponent,
            },
            {
                path: 'view/:id',
                component: ViewRessourceComponent,
            },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RessourceRoutingModule { }