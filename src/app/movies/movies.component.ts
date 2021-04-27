import { Component, OnInit } from '@angular/core';
import {Movie, MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  displayDetails: boolean;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getAllMovies();
    this.displayDetails = false;
  }

  checkChanged(): void{
   this.displayDetails = !this.displayDetails;
  }

}
