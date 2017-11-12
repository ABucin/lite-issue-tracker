import {NgModule} from '@angular/core';
import {TicketsComponent} from './view/tickets/tickets.component';
import {TicketComponent} from './component/ticket/ticket.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TicketsComponent, TicketComponent],
  exports: [TicketComponent],
  imports: [CommonModule]
})
export class TicketsModule {

}
