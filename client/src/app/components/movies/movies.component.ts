import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/Movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    })
  }

  removeMovie(movie: Movie) {
    if (confirm('Are You Sure?')) {
      this.movieService.removeMovie(movie).subscribe(() => {
        this.movies.forEach((cur, index) => {
          if (movie._id === cur._id) {
            this.movies.splice(index, 1);
          }
        });
      });
    }
  }

}
