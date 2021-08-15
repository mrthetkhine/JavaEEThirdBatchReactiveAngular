import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies : Array<Movie> = [];
  constructor() {
    this.movies.push(new Movie("Titanic",1995,"Jame Cameron"));
    this.movies.push(new Movie("Matrix",1995,"Jame Cameron"));
    this.movies.push(new Movie("Avata",1995,"Jame Cameron"));
  }


  getAllMovie():Array<Movie>{
    return this.movies;
  }
}
