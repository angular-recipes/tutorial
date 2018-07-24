import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() onRate = new EventEmitter();
  @Output() onCartAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBookRate(userRating: number) {
    this.onRate.emit(userRating);
  }

  onAddToCart() {
    this.onCartAdd.emit();
  }
}
