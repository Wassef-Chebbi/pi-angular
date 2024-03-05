import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FrontComponent } from './layouts/front/front.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { UniversityModule } from './manage-university/university.module';

import { ClubModule } from './manage-club/club.module';
import { PreLoaderComponent } from './layouts/front/pre-loader/pre-loader.component';
import { BackToTopComponent } from './layouts/front/back-to-top/back-to-top.component';
import { NavbarComponent } from './layouts/front/navbar/navbar.component';
import { FooterComponent } from './layouts/front/footer/footer.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    PreLoaderComponent,
    BackToTopComponent,
    NavbarComponent,
    FooterComponent,
    FrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    UniversityModule,
    ClubModule,
    SharedModule,
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
