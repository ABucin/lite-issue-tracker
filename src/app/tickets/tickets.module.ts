import {NgModule} from '@angular/core';
import {TicketsComponent} from './view/tickets/tickets.component';
import {TicketComponent} from './component/ticket/ticket.component';

@NgModule({
  declarations: [TicketsComponent, TicketComponent],
  exports: [TicketComponent]
})
export class TicketsModule {

}
