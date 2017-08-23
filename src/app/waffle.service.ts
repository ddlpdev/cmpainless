import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';


@Injectable()
export class WaffleService {
  private headers = new Headers();


  constructor(private http: Http) { }

  getWaffle(){

    var returndata;
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    return  this.http.get("/waffle", {
          headers: this.headers
        }).map((res:Response) => res.json());
    //return returndata.text();
  }

}
