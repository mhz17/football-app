import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Football } from './football.model';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  public getAllData(datetime: string): Observable<any> {
    return this.http
      // .get('assets/output.json')
      .get(API_URL + 'scrape:' + datetime)
      .map(response => {
        return response.json();
      },  error => {
        return error;
     });
  }

}
