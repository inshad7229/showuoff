import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import {AppProvider} from './services/app.provider'


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {LayoutModule}  from './layout/layout.module'
import {LoginComponent} from './authentications/login/login.component'
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // LayoutComponent
    // DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  RouterModule,
    AppRoutingModule,
    LayoutModule,
    BrowserModule,
BrowserAnimationsModule,
HttpClientModule,
  ],
  providers: [AppProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
