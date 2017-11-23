import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../model/ticket.model';
import {ETicketPriority} from '../../model/ticket-priority.enum';
import {ETicketStatus} from "../../model/ticket-status.enum";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {

  public readonly tickets: any = {
    created: [],
    done: [],
    in_progress: [],
    testing: []
  };
  public readonly ticketStatus: any = ETicketStatus;

  constructor() {
  }

  ngOnInit() {
    this.tickets.created[0] = new Ticket();
    this.tickets.created[0].title = 'Plan QA meeting';
    this.tickets.created[0].code = 'TR-123';
    this.tickets.created[0].priority = ETicketPriority.HIGH;

    this.tickets.created[1] = new Ticket();
    this.tickets.created[1].title = 'Setup infrastructure';
    this.tickets.created[1].code = 'TR-124';
    this.tickets.created[1].priority = ETicketPriority.LOW;
  }

  /**
   * Updates ticket status to provided value.
   * @param $event contains current ticket data
   * @param {ETicketStatus} column the new ticket status
   */
  public updateTicketStatus($event: any, column: ETicketStatus) {
    const ticket: Ticket = $event.dragData;
    const status: string = ticket.status.toLowerCase();
    const index: number = this.tickets[status]
      .findIndex((element: Ticket) => {
        return element.code === ticket.code;
      });

    if (index > -1) {
      this.tickets[status].splice(index, 1);
    }

    ticket.status = column;
    this.tickets[column.toLowerCase()].push(ticket);
  }
}
