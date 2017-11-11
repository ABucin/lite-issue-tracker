import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home/home.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  exports: [
    SidebarComponent
  ],
  imports: [
    AppRoutingModule
  ],
  declarations: [SidebarComponent, DashboardComponent, HomeComponent]
})
export class CoreModule {

}
