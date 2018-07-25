import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Cart, Item } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  cart: Cart;

  constructor(private bookService: BookService, private cartService: CartService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.cart = this.cartService.getCart();
  }

  addBook(book: Book) {
    this.bookService.addBook(book);
  }

  rate(book: Book, userRating: number) {
    this.bookService.rateBook(book, userRating);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
