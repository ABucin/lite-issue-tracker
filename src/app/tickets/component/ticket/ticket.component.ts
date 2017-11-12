import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../model/ticket.model';
import {ETicketPriority} from '../../model/ticket-priority.enum';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TicketComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  constructor() {
  }

  ngOnInit() {
  }

  generatePriorityIcon(): string {
    let icon = '';

    switch (this.ticket.priority) {
      case ETicketPriority.HIGH: {
        icon = 'ticket-priority-high';
        break;
      }
      case ETicketPriority.LOW: {
        icon = 'ticket-priority-low';
        break;
      }
      default: {
        break;
      }
    }

    return `ticket-priority ${icon}`;
  }
}
