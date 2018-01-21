import {NgModule} from '@angular/core';
import {TeamComponent} from './view/team/team.component';
import {SharedModule} from '../shared/shared.module';
import {TeamMemberModalComponent} from './component/modal/team-member-modal.component';

@NgModule({
  declarations: [
    TeamComponent,
  ],
  entryComponents: [
  ],
  imports: [
    SharedModule
  ]
})
export class TeamModule {

}
