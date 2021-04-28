import {createAction, props} from '@ngrx/store';
import {Movie} from '../../../services/movies.service';

export const toggleDisplayDetails = createAction('[Movies] Toggle display details');

export const setCurrentMovie = createAction('[Movies] Set Current Movie', props<{movie: Movie}>());
