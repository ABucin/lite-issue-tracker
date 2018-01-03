import {EActivityType} from './activity-type.enum';

export class Activity {
  private _source: string;
  private _target: string;
  private _time: string;
  private _type: EActivityType = EActivityType.WORKLOG;
  private _value: string;

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get source(): string {
    return this._source;
  }

  set source(value: string) {
    this._source = value;
  }

  get target(): string {
    return this._target;
  }

  set target(value: string) {
    this._target = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get type(): EActivityType {
    return this._type;
  }

  set type(value: EActivityType) {
    this._type = value;
  }
}
