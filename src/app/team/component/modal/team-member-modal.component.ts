import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from "../../../core/model/user.model";

@Component({
  templateUrl: 'team-member-modal.component.html'
})
export class TeamMemberModalComponent {
  constructor(public bsModalRef: BsModalRef) {
  }

  public user: User;
}
