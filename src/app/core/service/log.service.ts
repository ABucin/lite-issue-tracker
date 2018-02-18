import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Log} from '../model/log.model';

@Injectable()
export class LogService {
  constructor(private httpService: HttpService<Log>) {
  }
}
