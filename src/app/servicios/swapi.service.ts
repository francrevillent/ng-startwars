import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs";
import {Observable} from "rxjs";


const  API_URL_PERSONAJES_STARWARS:string = "http://swapi.co/api/people/";

@Injectable()
export class SwapiService {

  private http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  getPeopleList():Observable<any>{

    return this.http
      .get(API_URL_PERSONAJES_STARWARS)
      .map( (res:Response) => res.json().results);


  }

}
