import { Component, OnInit,TemplateRef } from '@angular/core';
import {MovieService} from "../../service/movie-service.service";
import {Movie} from "../../model/movie.model";
import {Router} from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder, FormControl, FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Array<Movie>;
  modalRef!: BsModalRef;

  /*
  movieForm = new FormGroup({
    name:new FormControl(''),
    year:new FormControl(''),
    director:new FormControl('')
  });
  */
  movieForm = this.fb.group({
    name:['', Validators.required],
    year:['', [
              Validators.required,
              Validators.pattern("^[0-9]*$"),
              Validators.minLength(4),
              Validators.maxLength(4)
        ]],
    director:['', Validators.required],
  });

  constructor(
              private fb:FormBuilder,
              private movieService: MovieService,
              private router:Router,
              private modalService: BsModalService) {
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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.movieForm.reset();
  }
  showNewMovieDlg()
  {

    console.log("Show New Movie Dlg");
  }
  closeNewMovieModal()
  {
    this.modalRef.hide();
  }
  get movieFormControl() {
    return this.movieForm.controls;
  }
  onSubmit()
  {
    let json = {... this.movieForm.value};
    console.log("On submit ",json);
    this.modalRef.hide();
  }
}
