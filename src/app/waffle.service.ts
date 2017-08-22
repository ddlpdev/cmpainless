import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class WaffleService {
  private headers = new Headers();


  constructor(private http: Http) { }

  getWaffle(): Promise<string>{

    var returndata;
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    returndata =  this.http.get("/waffle", {
          headers: this.headers
        });
    return returndata.text();
  }

}
