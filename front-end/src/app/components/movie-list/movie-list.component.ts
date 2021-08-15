import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie-service.service";
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Array<Movie>;
  constructor(private movieService: MovieService ) {
    this.movies = this.movieService.getAllMovie();
    console.log("Movies ",this.movies);
  }

  ngOnInit(): void {
    //console.log("Get Movie Service ", this.movieService.getAllMovie());
  }

}
