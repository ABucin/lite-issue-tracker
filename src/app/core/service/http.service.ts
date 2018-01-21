import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpService<T> {
  public static readonly baseUrl: string = `${environment.protocol}://${environment.domain}:${environment.port}/${environment.apiVersion}`;

  constructor(private http: HttpClient, private _router: Router) {
  }

  public delete(url: string): Observable<Object> {
    const options = {
      headers: new HttpHeaders(),
      responseType: 'json' as 'json'
    };

    return <Observable<Object>> this.http.delete(url, options)
      .catch(error => {
        return this.handleError(error);
      });
  }

  public get(url: string, params?: HttpParams): Observable<T> {
    const options = {
      headers: new HttpHeaders(),
      params: params,
      responseType: 'json' as 'json'
    };

    return <Observable<T>> this.http.get(url, options)
      .catch(error => {
        return this.handleError(error);
      });
  }

  public patch(url: string, body: T): Observable<T> {
    const options = {
      headers: new HttpHeaders(),
      responseType: 'json' as 'json'
    };

    return <Observable<T>> this.http.patch(url, body, options)
      .catch(error => {
        return this.handleError(error);
      });
  }


  public post(url: string, body: T): Observable<T> {
    const options = {
      headers: new HttpHeaders(),
      responseType: 'json' as 'json'
    };

    return <Observable<T>> this.http.post(url, body, options)
      .catch(error => {
        return this.handleError(error);
      });
  }

  public put(url: string, body: T): Observable<T> {
    const options = {
      headers: new HttpHeaders(),
      responseType: 'json' as 'json'
    };

    return <Observable<T>> this.http.put(url, body, options)
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(response: HttpErrorResponse): any {
    const error: any = response.error;

    return Observable.throw(error);
  }
}
