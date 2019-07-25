import {Component, OnInit} from '@angular/core';

import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  movie: Movie;

  name: string;
  genre: string;
  actors: string[];
  year: number;
  image: string;


  constructor(
    private movieService: MovieService,
    private router: Router) {
  }

  onSubmit() {
    const newMovie = {
      name: this.name,
      genre: this.genre,
      actors: this.actors,
      year: this.year,
      image: this.image
    };
    this.movieService.addMovie(newMovie).subscribe(movie => {
      if (movie.success) {
        this.router.navigate(['/']);
      }
    })
  }
}
