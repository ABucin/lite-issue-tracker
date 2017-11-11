import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './core/view/dashboard/dashboard.component';
import {HomeComponent} from './core/view/home/home.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent}
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
