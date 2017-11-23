import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../../tickets/model/ticket.model';
import {ETicketPriority} from '../../../tickets/model/ticket-priority.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

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
  }

}
