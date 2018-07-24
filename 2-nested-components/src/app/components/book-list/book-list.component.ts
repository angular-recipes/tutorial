import { Cart, Item } from './../../models/cart';
import { Book } from './../../models/book';
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

  cart: Cart = {
    items: [],
    totalPrice: 0
  };

  constructor() { }

  ngOnInit() {
  }

  addBook(book: Book) {
    this.books.unshift(book);
  }

  rate(book: Book, userRating: number) {
    book.rating = (book.rating * book.numRatings + userRating) / (book.numRatings + 1);
    book.numRatings++;
  }

  addToCart(book: Book) {
    let newItem = this.cart.items.find(i => i.name == book.title);

    if (newItem) {
      newItem.qty++;
    } else {
      let newItem: Item = {
        name: book.title,
        price: book.price,
        qty: 1
      };
      this.cart.items.push(newItem);
    }

    this.cart.totalPrice += book.price;
  }

}
