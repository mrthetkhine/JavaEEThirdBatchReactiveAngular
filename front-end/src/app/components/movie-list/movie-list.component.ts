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
  deleteMovieHandler(movie:Movie)
  {
    console.log("Delete movie handler ",movie);
    let index =this.movies.indexOf(movie);
    console.log("Index ",index);
    this.movies.splice(index,1);
  }
  changeAllMovie()
  {
    //this.movies = this.movies.reverse();
    for(let i=0,len = this.movies.length;i< len;i++)
    {
      this.movies[i].name = this.movies[i].name.toUpperCase();
      this.movies[i] = {...this.movies[i]};
    }
  }
}
