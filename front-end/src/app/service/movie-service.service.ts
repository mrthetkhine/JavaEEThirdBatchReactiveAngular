import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies : Array<Movie> = [];
  constructor() {
    this.movies.push(new Movie(1,"Titanic",1995,"Jame Cameron"));
    this.movies.push(new Movie(2,"Matrix",1995,"Jame Cameron"));
    this.movies.push(new Movie(3,"Avata",1995,"Jame Cameron"));
  }


  getAllMovie():Array<Movie>{
    return this.movies;
  }
  addMovie(movie:Movie)
  {
    this.movies.push(movie);
  }
}
