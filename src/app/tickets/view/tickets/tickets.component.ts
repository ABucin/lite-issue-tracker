import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../model/ticket.model';
import {ETicketPriority} from '../../model/ticket-priority.enum';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {

  private _tickets: Ticket[] = [];

  constructor() {
  }

  ngOnInit() {
    this._tickets[0] = new Ticket();
    this._tickets[0].title = 'Plan QA meeting';
    this._tickets[0].code = 'TR-123';
    this._tickets[0].priority = ETicketPriority.HIGH;

    this._tickets[1] = new Ticket();
    this._tickets[1].title = 'Setup infrastructure';
    this._tickets[1].code = 'TR-124';
    this._tickets[1].priority = ETicketPriority.LOW;
  }

}
