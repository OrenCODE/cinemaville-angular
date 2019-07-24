import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Movie } from "../models/Movie";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl: string = 'http://localhost:3005/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
  }

  getMovie(id: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  removeMovie(movie: Movie): Observable<Movie> {
    const url = `${this.moviesUrl}/${movie._id}`;

    return this.http.delete<Movie>(url, httpOptions);
  }
}
