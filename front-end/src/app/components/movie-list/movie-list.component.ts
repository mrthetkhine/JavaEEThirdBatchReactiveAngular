import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {MovieService} from "../../service/movie-service.service";
import {Movie} from "../../model/movie.model";
import {Router} from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder, FormControl, FormGroup,Validators} from "@angular/forms";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @ViewChild('template', { static: false }) template:any;

  movies: Array<Movie>;
  movieModalRef!: BsModalRef;

  /*
  movieForm = new FormGroup({
    name:new FormControl(''),
    year:new FormControl(''),
    director:new FormControl('')
  });
  */
  movieForm = this.fb.group({
    id:[''],
    name:['', Validators.required],
    year:['', [
              Validators.required,
              Validators.pattern("^[0-9]*$"),
              Validators.minLength(4),
              Validators.maxLength(4)
        ]],
    director:['', Validators.required],
  });
  editIndex:number =-1;
  editMode:boolean = false;

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
    Swal.fire({
      title: 'Are you sure you want to delete?',
      /*text: 'You will not be able to recover this imaginary file!',*/
     /* icon: 'warning',*/
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteMovie(movie);

      }
    })


  }

  private deleteMovie(movie: Movie) {
    console.log("Delete movie handler ", movie);
    let index = this.movies.indexOf(movie);
    console.log("Index ", index);
    this.movies.splice(index, 1);
    Swal.fire(
      'Deleted!',
      'Your imaginary file has been deleted.',
      'success'
    )
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
  openNewMovieDlg(template: TemplateRef<any>) {
    this.editMode = false;
    this.movieModalRef = this.modalService.show(template);
    this.movieForm.reset();
  }
  showNewMovieDlg()
  {

    console.log("Show New Movie Dlg");
  }
  closeNewMovieModal()
  {
    this.movieModalRef.hide();
  }
  get movieFormControl() {
    return this.movieForm.controls;
  }
  onSubmit()
  {
    if(this.editMode)
    {
      this.updateMovie();
    }
    else {
      this.saveNewMovie();
    }

  }

  private saveNewMovie() {
    let json = {...this.movieForm.value};
    console.log("On submit ", json);
    this.movieModalRef.hide();

    let movie: Movie = json;
    this.movieService.addMovie(movie);
  }
  private updateMovie()
  {
    console.log("Edit Mode on Submit");
    this.editMode = false;

    let json = {...this.movieForm.value};
    let movie:Movie = json;
    this.movies[this.editIndex] = movie;
    this.movieModalRef.hide();
  }
  onEditHandler(movie:Movie)
  {
    console.log("Movie to edit ",movie);
    /*
    this.movieForm.patchValue({
    name:"Tk"});
    * */
    this.editMode = true;
    this.editIndex = this.movies.indexOf(movie);
    this.movieForm.patchValue(movie);
    this.movieModalRef = this.modalService.show(this.template);
  }

}
