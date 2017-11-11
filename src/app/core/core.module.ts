import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  exports: [
    SidebarComponent
  ],
  imports: [
  ],
  declarations: [SidebarComponent]
})
export class CoreModule {

}
