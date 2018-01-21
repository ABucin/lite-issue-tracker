import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DndModule} from 'ng2-dnd';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TeamMemberModalComponent} from "../team/component/modal/team-member-modal.component";

@NgModule({
  declarations: [
    TeamMemberModalComponent
  ],
  entryComponents: [
    TeamMemberModalComponent
  ],
  exports: [
    CommonModule,
    DndModule,
    NgxChartsModule,
    NgxDatatableModule
  ],
  imports: [
    CommonModule,
    DndModule,
    NgxChartsModule,
    NgxDatatableModule
  ]
})
export class SharedModule {

}
