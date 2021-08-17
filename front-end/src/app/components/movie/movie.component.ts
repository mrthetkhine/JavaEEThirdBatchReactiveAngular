import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'tr[app-movie]',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()
  movie!:Movie;

  @Output()
  deleteEvent = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
    console.log("MovieComponent ngOnInit ",this.movie);
  }
  ngOnChanges():void{
    console.log("MovieComponent ngOnChanges ",this.movie);
  }
  ngOnDestroy():void{
    console.log("MovieComponent Destroyed ",this.movie);
  }
  mouseOver(e:MouseEvent)
  {
    console.log("Mouseover ",e);
  }
  btnMovieDelete()
  {
    console.log("Delete movie ",this.movie);
    this.deleteEvent.emit(this.movie);
  }
}
