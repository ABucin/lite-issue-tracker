import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../../tickets/model/ticket.model';
import {ETicketPriority} from '../../../tickets/model/ticket-priority.enum';
import {Activity} from '../../model/activity';
import {EActivityType} from '../../model/activity-type.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public recentActivity: Activity[] = [];
  public tickets: Ticket[] = [];

  constructor() {
  }

  ngOnInit() {
    this.tickets[0] = new Ticket();
    this.tickets[0].title = 'Plan QA meeting';
    this.tickets[0].code = 'TR-123';
    this.tickets[0].priority = ETicketPriority.HIGH;

    this.tickets[1] = new Ticket();
    this.tickets[1].title = 'Setup infrastructure';
    this.tickets[1].code = 'TR-124';
    this.tickets[1].priority = ETicketPriority.LOW;

    this.recentActivity[0] = new Activity();
    this.recentActivity[0].source = 'abucin';
    this.recentActivity[0].target = 'TR-190';
    this.recentActivity[0].time = '3 hrs. ago';
    this.recentActivity[0].type = EActivityType.WORKLOG;
    this.recentActivity[0].value = '3.5';

    this.recentActivity[1] = new Activity();
    this.recentActivity[1].source = 'abucin';
    this.recentActivity[1].target = 'TR-192';
    this.recentActivity[1].time = '5 min. ago';
    this.recentActivity[1].type = EActivityType.COMMENT;
    this.recentActivity[1].value = 'This is not how it should be done. You must set your priorities straight.';
  }

}
