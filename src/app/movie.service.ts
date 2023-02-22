import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movie: Movie;

  movieList = [
    new Movie('The GodFather', '1972',  'Francis Ford Coppola'),
    new Movie('The GodFather Part II', '1974', 'Francis Ford Coppola'),
    new Movie('The Dark Knight', '2008', 'Christopher Nolan'),
    new Movie('The Shawshank Redemption', '1994', 'Frank Darabont'),
  ];

  getMovies() {
    return this.movieList;
  }

  getRandomId(): number {
    let id = 0;
    id = Math.floor(Math.random() * 14);
    return id
  }

  addMovie(title: string, director: string, year: string) {
    this.movieList.push(new Movie(title, year, director));
  }
}
