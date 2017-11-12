import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    CommonModule,
    CoreModule
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class SharedModule {

}
