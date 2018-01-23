import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Football } from './football.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';

const API_URL = environment.apiUrl;

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  public getAllData(datetime: string): Observable<any> {

   const url = API_URL + '/date:' + datetime;

    return this.http
      .get(url)
      .map(response => {

        if (response['_body'].includes('Unfortunately') || response['_body'].includes('Timeout') ) {
          console.log('here');
          const e = new Error(response['_body']);
          throw e;
        }

        return response.json();
      },  error => {
        return error;
     }).timeout(120000);
  }

}
