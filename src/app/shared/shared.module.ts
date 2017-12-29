import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DndModule} from 'ng2-dnd';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  exports: [
    CommonModule,
    DndModule,
    NgxChartsModule
  ],
  imports: [
    CommonModule,
    DndModule,
    NgxChartsModule
  ]
})
export class SharedModule {

}
