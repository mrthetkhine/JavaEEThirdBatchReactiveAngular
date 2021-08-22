import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SecondComponent} from "./pages/second/second.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailComponent} from "./pages/movie-detail/movie-detail.component";
import {PageNotFoundComponentComponent} from "./pages/page-not-found-component/page-not-found-component.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
