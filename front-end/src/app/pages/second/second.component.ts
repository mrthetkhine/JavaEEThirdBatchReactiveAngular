import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  movie:Movie = new Movie("1","Titanic",1995,"Jame Cameron");
  model = {
    date :new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("On Submit ",this.movie);
  }
  changeModel()
  {
    this.movie = new Movie("1","New Titanic",1995,"New Jame Cameron");
  }
  viewModel()
  {
    console.log("Movie ",this.movie);
    console.log("Date ",this.model.date);
  }

}
