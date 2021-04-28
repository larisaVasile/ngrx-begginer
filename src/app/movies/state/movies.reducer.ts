import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {toggleDisplayDetails} from './movies.actions';

export interface MoviesState{
  displayDetails: boolean;
}

const initialState: MoviesState = {
  displayDetails: false
};

const getMoviesFeatureState = createFeatureSelector<MoviesState>('movies');

export const getDisplayDetails = createSelector(getMoviesFeatureState, state => state.displayDetails);

export const moviesReducer = createReducer(
  initialState,
  on(toggleDisplayDetails, state => {
    console.log('in reducer');
    return{
      ...state,
      displayDetails: !state.displayDetails
    };
  })
);
