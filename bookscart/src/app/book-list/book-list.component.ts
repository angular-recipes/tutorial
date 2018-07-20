import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{
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

  ngOnInit() {
  }

  rate(book: Book, userRating: number) {
    book.rating = (book.rating*book.numRatings + userRating)/(book.numRatings + 1);
    book.numRatings++;
  }

}
