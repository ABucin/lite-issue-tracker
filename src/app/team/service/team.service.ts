import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Team} from '../model/team.model';
import {HttpService} from '../../core/service/http.service';

@Injectable()
export class TeamService {
  constructor(private httpService: HttpService<Team>) {

  }

  public getTeam(id: string): Observable<Team> {
    return this.httpService.get('');
  }
}
