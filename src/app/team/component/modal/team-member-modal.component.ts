import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  templateUrl: 'team-member-modal.component.html'
})
export class TeamMemberModalComponent {
  constructor(public bsModalRef: BsModalRef){}
}
