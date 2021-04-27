import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {moviesReducer} from './state/movies.reducer';

const moviesRoutes: Routes = [{
  path: '', component: MoviesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes),
    StoreModule.forFeature('movies', moviesReducer)
  ],
  declarations: [
    MoviesComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule {
}
