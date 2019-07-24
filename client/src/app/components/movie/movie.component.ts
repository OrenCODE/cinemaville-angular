import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";

import { Movie} from "../../models/Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService
              ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie)
  }

}
