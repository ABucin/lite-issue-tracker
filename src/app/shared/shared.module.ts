import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';

@NgModule({
  exports: [
    CoreModule
  ],
  imports: [
    CoreModule
  ]
})
export class SharedModule {

}
