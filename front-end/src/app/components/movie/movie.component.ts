import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Movie} from "../../model/movie.model";
import {Router} from "@angular/router";

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

  constructor(private router:Router) { }

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
  goToMovieDetail()
  {
    console.log("Go to movie detail ",this.movie.id);
    this.router.navigate(['movies/'+this.movie.id]);

  }
}
