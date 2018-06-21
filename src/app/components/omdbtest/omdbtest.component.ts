// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms'
import {OmdbService} from '../../services/omdb.service.client'


@Component({
  selector: 'app-omdbtest',
  templateUrl: './omdbtest.component.html',
  styleUrls: ['./omdbtest.component.css']
})
export class OmdbtestComponent implements OnInit {
	title:string;
	movies:any;

	@ViewChild('f') searchForm:NgForm;

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }
	search(){
		this.title = this.searchForm.value.title;
	this.omdbService.searchMovie(this.title).subscribe(

		(data:any) => {
			this.movies = data.Search;
			console.log(this.movies);
}
)
}
}
