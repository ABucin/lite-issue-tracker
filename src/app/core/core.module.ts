import {NgModule} from '@angular/core';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {HomeComponent} from './view/home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {TicketsModule} from '../tickets/tickets.module';
import {AnalyticsModule} from '../analytics/analytics.module';
import {TeamModule} from '../team/team.module';
import { SettingsComponent } from './view/settings/settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    SettingsComponent,
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    AnalyticsModule,
    AppRoutingModule,
    TeamModule,
    TicketsModule
  ]
})
export class CoreModule {

}
