import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SecondComponent} from "./pages/second/second.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailComponent} from "./pages/movie-detail/movie-detail.component";
import {PageNotFoundComponentComponent} from "./pages/page-not-found-component/page-not-found-component.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./pages/login/login.component";
import {LogoutComponent} from "./pages/logout/logout.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout',
    component: LogoutComponent,
    canActivate:[AuthGuard]},
  { path: 'template-form-demo', component: SecondComponent },
  { path: 'movies',
    component: MovieListComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [ AuthGuard ]
  },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
