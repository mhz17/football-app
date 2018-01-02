import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Football } from './football.model';
import 'rxjs/add/operator/map';
import {deserialize} from 'serializer.ts/Serializer';

const API_URL = environment.apiUrl;

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  public getAllData(): Observable<any> {
    return this.http
      .get(API_URL + '/scrape')
      .map(response => {
        const value =  deserialize<Football[]>(Football, response);
        console.log(value);
        return value;
      });
  }

}
