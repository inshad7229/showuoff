import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UsersListComponent } from './users-list/users-list.component';
import {AdminService} from '../services/admin/admin.service'
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ComponentsModule
    ],
    declarations: [
    LayoutComponent,
    DashboardComponent,
	UserProfileComponent,
	TableListComponent,
	TypographyComponent,
	IconsComponent,
	MapsComponent,
	NotificationsComponent,
	UpgradeComponent,
    UsersListComponent
    ],
    providers:[AdminService]
})
export class LayoutModule {}
