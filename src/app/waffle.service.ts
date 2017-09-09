import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Waffle} from './waffle';

@Injectable()
export class WaffleService {
  private headers = new Headers();


  constructor(private http: Http) { }



  getWaffle():Observable<Waffle>{

    var returndata;
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    return  this.http.get("https://campaignless.herokuapp.com/api/waffle", {
          headers: this.headers
        }).map( (res:Response) => 
           {
             var thejson = res.json();
             console.log(thejson);
             var headline:string = thejson.thewaffle;
             var subtext:string ="";
             var theWaffle = new Waffle(headline, subtext);

             return theWaffle;}
          
        ).delay(3000);
    //return returndata.text();
  }

}
