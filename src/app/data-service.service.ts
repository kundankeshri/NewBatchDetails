import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class DataServiceService {

  constructor(private _http: Http) { }

  getUsers() {
    return
      this._http.get("http://localhost:3000/api/countryDetails")
      .map((result : Response) => result.json().data)
      .catch(this.handleError);
  }

  handleError(error : Response ){
        console.error(error);
        return Observable.throw(error);
  }

}
