import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SecondComponent} from "./pages/second/second.component";

const routes: Routes = [
  { path: 'home-page', component: HomeComponent },
  { path: 'second-page', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
