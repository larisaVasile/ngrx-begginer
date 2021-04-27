import {Injectable} from '@angular/core';

export interface Movie {
  title: string;
  country: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [{title: 'Our Planet Part 1', country: 'UK', type: 'documentary'},
    {title: 'Our Planet Part 2', country: 'UK', type: 'documentary'},
    {title: 'Mission Impossible 1', country: 'US', type: 'action'},
    {title: 'Mission Impossible 2', country: 'US', type: 'action'}];

  getAllMovies(): Movie[]{
    return this.movies;
  }
}
