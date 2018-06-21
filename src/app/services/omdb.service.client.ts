import { Injectable } from '@angular/core';
import{Page} from '../models/page.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment'

@Injectable()

export class OmdbService {
	constructor(private http:Http) { }

searchMovie(title:string){
	const url = 'http://www.omdbapi.com/?apikey=4e29c677&s=' +title;
	return this.http.get(url).pipe(map(
		(response:Response) => {
			return response.json();
		}
	))
}
}