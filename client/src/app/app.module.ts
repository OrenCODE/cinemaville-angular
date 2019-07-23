import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MoviesComponent } from './components/movies/movies.component';

import { MovieService } from "./services/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieFormComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
