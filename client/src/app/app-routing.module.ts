import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieFormComponent } from "./components/movie-form/movie-form.component";

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'newMovie', component: MovieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
