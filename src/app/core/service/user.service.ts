import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../model/user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private readonly baseUrl: string = `${HttpService.baseUrl}/users`;

  constructor(private httpService: HttpService<User>) {
  }

  public deleteUser(id: string): Observable<Object> {
    const url = `${this.baseUrl}/${id}`;

    return this.httpService.delete(url);
  }

  public getUser(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`;

    return this.httpService.get(url);
  }

  public updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;

    return this.httpService.put(url, user);
  }
}
