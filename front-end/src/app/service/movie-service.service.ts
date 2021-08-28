import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../Config/Config";
import {Observable} from "rxjs";

const API  = API_URL+"movies";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies : Array<Movie> = [];

  constructor(private http:HttpClient) {

    /*
    this.movies.push(new Movie(1,"Titanic",1995,"Jame Cameron"));
    this.movies.push(new Movie(2,"Matrix",1995,"Jame Cameron"));
    this.movies.push(new Movie(3,"Avata",1995,"Jame Cameron"));

     */
    this.fetchAllMovie();
  }

  fetchAllMovie():Observable<Movie[]> {
    console.log("Get ",API);
    return this.http.get<Movie[]>(API);
  }
  getMovieById(id:string):Observable<Movie>{
    return this.http.get<Movie>(API+"/"+id);
  }
  /*
  getAllMovie():Array<Movie>{
    return this.movies;
  }
  */
  saveMovie(movie:Movie):Observable<Movie>
  {
    return this.http.post<Movie>(API,movie);
  }
  updateMovie(movie:Movie):Observable<Movie>
  {
    return this.http.put<Movie>(API+"/"+movie.id,movie);
  }
  deleteMovie(movie:Movie):Observable<any>
  {
    return this.http.delete(API+"/"+movie.id);
  }
}
