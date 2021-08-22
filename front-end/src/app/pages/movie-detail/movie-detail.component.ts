import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  movieId!:number;
  ngOnInit(): void {
    this.movieId =   Number(this.route.snapshot.paramMap.get('id'));
    console.log("Showing movie id");
  }

}
