import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Ticket} from '../model/ticket.model';
import {HttpService} from '../../core/service/http.service';

@Injectable()
export class TicketService {
  private readonly baseUrl: string = `${HttpService.baseUrl}/tickets`;

  constructor(private httpService: HttpService<Ticket>) {
  }

  public createTicket(ticket: Ticket): Observable<Ticket> {
    const url = `${this.baseUrl}`;

    return this.httpService.post(url, ticket);
  }

  public deleteTicket(id: string): Observable<Object> {
    const url = `${this.baseUrl}/${id}`;

    return this.httpService.delete(url);
  }

  public getTicket(id: string): Observable<Ticket> {
    const url = `${this.baseUrl}/${id}`;

    return this.httpService.get(url);
  }

  public updateTicket(ticket: Ticket): Observable<Ticket> {
    const url = `${this.baseUrl}/${ticket.id}`;

    return this.httpService.put(url, ticket);
  }

}
