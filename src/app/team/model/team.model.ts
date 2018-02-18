import {User} from '../../core/model/user.model';

export class Team {
  private _name: string;
  private _users: User[];

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }
}
