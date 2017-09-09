import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { WaffleService } from './../waffle.service';


@Component({
  selector: 'app-waffle-generator',
  templateUrl: './waffle-generator.component.html',
  styleUrls: ['./waffle-generator.component.css']
})
export class WaffleGeneratorComponent implements OnInit {

  public waffle: Subject<any> = new Subject<any>();
  public thewaff;
  public loaderOn:boolean;
  constructor(private router: Router, 
              private http:Http,
              private waffleservice: WaffleService) { }

  ngOnInit() {
    this.loaderOn = false;
    this.getTheWaffle();
  }

  getTheWaffle(){
    this.waffleservice.getWaffle()
    .subscribe(data => 
      {this.thewaff = data.headline;
      this.loaderOn = true;
      }
  
  );
  }

  whatelseyougotClick(){
    this.loaderOn = false;
    this.getTheWaffle();
  }

  telltheworldClick(){
                this.router.navigateByUrl('/share');


  }

}
