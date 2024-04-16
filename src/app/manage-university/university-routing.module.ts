import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UniversityListComponent,
  // },
  // {
  //   path: ':id',
  //   component: UniversityDetailComponent,
  // },
  // {
  //   path: 'news',
  //   children: [],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageUniversityRoutingModule { }
