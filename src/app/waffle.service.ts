import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WaffleService {
  private headers = new Headers();


  constructor(private http: Http) { }

  getWaffle():Observable<any>{

    var returndata;
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    return  this.http.get("/api/waffle", {
          headers: this.headers
        }).map( (res:Response) => {
          setTimeout(()=>{ return res.json() }, 4000)
          
        });
    //return returndata.text();
  }

}
