import { Component, OnInit } from '@angular/core';
import {Movie, MoviesService} from '../../services/movies.service';
import {Store} from '@ngrx/store';
import {getDisplayDetails} from './state/movies.reducer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  displayDetails: boolean;

  constructor(private store: Store<any>, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getAllMovies();
    this.displayDetails = false;

    this.store.select(getDisplayDetails).subscribe(displayDetails => {
          this.displayDetails = displayDetails;
      }
    );
  }

  checkChanged(): void{
   this.store.dispatch({type: '[Movies] Toggle display details'});
  }

}
