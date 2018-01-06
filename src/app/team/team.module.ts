import {NgModule} from '@angular/core';
import {TeamComponent} from './view/team/team.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [TeamComponent]
})
export class TeamModule {

}
