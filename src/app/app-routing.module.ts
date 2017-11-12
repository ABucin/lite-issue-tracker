import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './core/view/dashboard/dashboard.component';
import {HomeComponent} from './core/view/home/home.component';
import {AuthGuard} from './auth.guard';
import {TicketsComponent} from './tickets/view/tickets/tickets.component';
import {AnalyticsComponent} from './analytics/view/analytics/analytics.component';
import {TeamComponent} from './team/view/team/team.component';
import {SettingsComponent} from './core/view/settings/settings.component';

export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    children: [
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'team', component: TeamComponent},
      {path: 'tickets', component: TicketsComponent}
    ],
    component: HomeComponent,
    path: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {

}
