import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

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
  on(createAction('[Movies] Toggle display details'), state => {
    console.log('in reducer');
    return{
      ...state,
      displayDetails: !state.displayDetails
    };
  })
);
