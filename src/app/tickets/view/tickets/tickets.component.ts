import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ticket} from '../../model/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {

  private _tickets: Ticket[];

  constructor() {
  }

  ngOnInit() {
  }

}
