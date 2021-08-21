import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { CounterParentComponent } from './components/counter-parent/counter-parent.component';
import { TemplateDemoComponent } from './components/template-demo/template-demo.component';
import { NgSwtichDemoComponent } from './components/ng-swtich-demo/ng-swtich-demo.component';
import { HomeComponent } from './pages/home/home.component';
import { SecondComponent } from './pages/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MovieListComponent,
    MovieComponent,
    CounterParentComponent,
    TemplateDemoComponent,
    NgSwtichDemoComponent,
    HomeComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
