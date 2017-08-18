import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';


@Component({
  selector: 'app-waffle-generator',
  templateUrl: './waffle-generator.component.html',
  styleUrls: ['./waffle-generator.component.css']
})
export class WaffleGeneratorComponent implements OnInit {

  constructor(private router: Router, private http:Http) { }

  ngOnInit() {
    // console.log("salut");
  	// 	this.http.get('http://www.campaignlive.co.uk/rss/latest')
  	// 	.map(res => res)
    //   	.subscribe(res => {
    //   		//console.log( res.responseData.feed);
    //     	console.log(res);
    //   	});
  }

  whatelseyougotClick(){

  }

  telltheworldClick(){
                this.router.navigateByUrl('/share');


  }

}
