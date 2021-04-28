import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {setCurrentMovie, toggleDisplayDetails} from './movies.actions';
import {Movie} from '../../../services/movies.service';

export interface MoviesState{
  displayDetails: boolean;
  currentMovie: Movie;
}

const initialState: MoviesState = {
  displayDetails: false,
  currentMovie: null
};

// selectors
const getMoviesFeatureState = createFeatureSelector<MoviesState>('movies');

export const getDisplayDetails = createSelector(getMoviesFeatureState, state => state.displayDetails);

export const getCurrentMovie = createSelector(getMoviesFeatureState, state => state.currentMovie);

// reducer
export const moviesReducer = createReducer(
  initialState,
  on(toggleDisplayDetails, state => {
    console.log('in reducer action toggleDisplayDetails');
    return{
      ...state,
      displayDetails: !state.displayDetails
    };
  }),
  on(setCurrentMovie, (state, {movie}) => {
    console.log('in reducer action setCurrentMovie');
    return {
      ...state,
      currentMovie: movie
    };
  })
);
