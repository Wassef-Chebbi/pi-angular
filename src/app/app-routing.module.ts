import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { FrontComponent } from './layouts/front/front.component';

import { AppSideLoginComponent } from './pages/authentication/login/login.component';
import { AppSideRegisterComponent } from './pages/authentication/register/register.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UicomponentsModule } from './pages/ui-components/ui-components.module';

import { ClubModule } from './manage-club/club.module';
import { CategoryModule } from './category/category.module';
import { RessourceModule } from './ressource/ressource.module';


const routes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },

      {
        path: 'clubs',
        loadChildren: () =>
          import('./manage-club/club.module').then((m) => m.ClubModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'ressources',
        loadChildren: () =>
          import('./ressource/ressource.module').then((m) => m.RessourceModule),
      },
    ],
  },

  //front-----------------------
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: LandingpageComponent,
      },

      {
        path: 'course',
        loadChildren: () =>
          import('./manage-club/club.module').then((m) => m.ClubModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'ui',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'clubs',
        loadChildren: () =>
          import('./manage-club/club.module').then(
            (m) => m.ClubModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: FrontComponent,
    children: [
      {
        path: '',
        component: NotfoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
