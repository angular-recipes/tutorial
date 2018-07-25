import { AppModule } from './../app.module';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [{
    title: 'The Alcheimst',
    author: 'Paulo Cohelo',
    price: 20,
    rating: 0,
    numRatings: 0
  }, {
    title: 'The monk who sold his ferrari',
    author: 'Robin Sharma',
    price: 30,
    rating: 0,
    numRatings: 0
  }, {
    title: 'THE NIGHTINGALE',
    author: 'Kristin Hannah',
    price: 40,
    rating: 0,
    numRatings: 0
  }, {
    title: 'Harry Potter',
    author: 'J K Rowling',
    price: 10,
    rating: 0,
    numRatings: 0
  }];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.unshift(book);
  }

  rateBook(book: Book, userRating: number) {
    book.rating = (book.rating * book.numRatings + userRating) / (book.numRatings + 1);
    book.numRatings++;
  }

}
