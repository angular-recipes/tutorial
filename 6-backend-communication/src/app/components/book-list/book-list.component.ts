import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Cart, Item } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  cart: Cart;

  constructor(private bookService: BookService, private cartService: CartService, private http: Http) {
  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(res => this.books = res.json());

    this.cart = this.cartService.getCart();
  }

  addBook(book: Book) {
    this.bookService
      .addBook(book)
      .subscribe(res => this.books.push(res.json()))
      ;
  }

  rate(book: Book, userRating: number) {
    this.bookService
      .rateBook(book, userRating)
      .subscribe()
      ;
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
