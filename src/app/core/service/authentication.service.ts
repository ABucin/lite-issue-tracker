import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../model/user.model';

@Injectable()
export class AuthenticationService {
  private readonly baseUrl: string = `${HttpService.baseUrl}/users`;

  constructor(private httpService: HttpService<User>){}

  public login() {
    const url = `${this.baseUrl}/login`;

    return this.httpService.post(url, new User());
  }

  public logout() {
    const url = `${this.baseUrl}/logout`;

    return this.httpService.post(url, new User());
  }

  public register() {
    const url = `${this.baseUrl}/register`;

    return this.httpService.post(url, new User());
  }
}
