import {ETicketStatus} from './ticket-status.enum';
import {ETicketType} from './ticket-type.enum';
import {ETicketPriority} from './ticket-priority.enum';
import {Entity} from '../../core/model/entity.model';

export class Ticket extends Entity {
  private _code: string;
  private _priority: ETicketPriority = ETicketPriority.MEDIUM;
  private _status: ETicketStatus = ETicketStatus.CREATED;
  private _title: string;
  private _type: ETicketType = ETicketType.TASK;

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get priority(): ETicketPriority {
    return this._priority;
  }

  set priority(value: ETicketPriority) {
    this._priority = value;
  }

  get status(): ETicketStatus {
    return this._status;
  }

  set status(value: ETicketStatus) {
    this._status = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get type(): ETicketType {
    return this._type;
  }

  set type(value: ETicketType) {
    this._type = value;
  }
}
