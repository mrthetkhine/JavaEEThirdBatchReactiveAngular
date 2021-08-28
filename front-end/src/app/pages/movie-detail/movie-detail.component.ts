import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../service/movie-service.service";
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private movieService:MovieService) { }
  movieId!:string ;
  movie!:Movie ;
  ngOnInit(): void {
    this.movieId =   String(this.route.snapshot.paramMap.get('id'));
    console.log("Showing movie id");
    this.loadMovieById(this.movieId);
  }
  loadMovieById(movieId:string)
  {
    this.movieService.getMovieById(movieId).subscribe(movie=>{
      this.movie = movie;
    });
  }

}
