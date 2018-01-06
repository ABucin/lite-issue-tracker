import {environment} from "../../../environments/environment";

export class User {
  private _expertise: string;
  private _firstName: string;
  private _lastName: string;
  private _picture = `${environment.images}/user.png`;
  private _username: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get expertise(): string {
    return this._expertise;
  }

  set expertise(value: string) {
    this._expertise = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }
}
