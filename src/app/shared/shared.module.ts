import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DndModule} from 'ng2-dnd';

@NgModule({
  exports: [
    CommonModule,
    DndModule,
  ],
  imports: [
    CommonModule,
    DndModule
  ]
})
export class SharedModule {

}
