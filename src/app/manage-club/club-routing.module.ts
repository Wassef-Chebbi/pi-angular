import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubListDashComponent } from './club-list-dash/club-list-dash.component';

const routes: Routes = [
  {
    path: '',
    component: ClubListDashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRoutingModule {}
