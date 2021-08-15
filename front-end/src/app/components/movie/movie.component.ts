import { Component, Input,OnInit } from '@angular/core';
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()
  movie!:Movie;
  constructor() { }

  ngOnInit(): void {
    console.log("MovieComponent ngOnInit ",this.movie);
  }
  ngOnChanges():void{
    console.log("MovieComponent ngOnChanges ",this.movie);
  }
}
