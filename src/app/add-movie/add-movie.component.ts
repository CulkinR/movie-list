import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(private movieService: MovieService) {}


  addNewMovie(title: HTMLInputElement, director: HTMLInputElement, year: HTMLInputElement): boolean {
    this.movieService.addMovie(title.value, director.value, year.value);
    return false;
  }
}
