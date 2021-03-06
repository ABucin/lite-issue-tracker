import {NgModule} from '@angular/core';
import {TicketsComponent} from './view/tickets/tickets.component';
import {TicketComponent} from './component/ticket/ticket.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TicketsComponent,
    TicketComponent
  ],
  exports: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TicketsModule {

}
