import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';
import {BooksComponent} from './books/books.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}

