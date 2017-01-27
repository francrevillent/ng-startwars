import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs";
import {SwapiService} from "./servicios/swapi.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit{

  title = 'app works!';
  private http:Http;

  private swapiService: SwapiService;
  private people = [];

  constructor( swapiService:SwapiService ){
    this.swapiService = swapiService;
  }



  ngOnInit(): void {

    this.swapiService
      .getPeopleList()
      .subscribe( (people) => this.people = people );

  }


}






