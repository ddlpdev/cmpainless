import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { WaffleService } from './../waffle.service';


@Component({
  selector: 'app-waffle-generator',
  templateUrl: './waffle-generator.component.html',
  styleUrls: ['./waffle-generator.component.css']
})
export class WaffleGeneratorComponent implements OnInit {

  private waffle;

  constructor(private router: Router, 
              private http:Http,
              private waffleservice: WaffleService) { }

  ngOnInit() {
    // console.log("salut");
  	// 	this.http.get('http://www.campaignlive.co.uk/rss/latest')
  	// 	.map(res => res)
    //   	.subscribe(res => {
    //   		//console.log( res.responseData.feed);
    //     	console.log(res);
    //   	});
    this.getTheWaffle();
  }

  getTheWaffle(){
    this.waffleservice.getWaffle()
    .subscribe(data => console.log(data));
    //console.log(this.waffle);
  }

  whatelseyougotClick(){

  }

  telltheworldClick(){
                this.router.navigateByUrl('/share');


  }

}
