import {Injectable} from '@angular/core';

export interface Book {
  title: string;
  author: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [{title: 'The Book Thief', author: 'Markus Zusak', type: 'novel'},
    {title: 'The Girl on the Train', author: 'Paula Hawkins', type: 'novel'},
    {title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', type: 'novel'},
    {title: 'Pride and Prejudice', author: 'Jane Austen', type: 'novel'}];

  getAllBooks(): Book[]{
    return this.books;
  }
}
