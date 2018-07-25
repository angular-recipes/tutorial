import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  newBook: Book = {
    title: null,
    author: null,
    price: null,
    rating: 0,
    numRatings: 0
  };
  constructor() { }

  ngOnInit() {
  }

  onBookAdd() {
//    this.onAdd.emit(Object.assign({}, this.newBook));
    this.onAdd.emit(this.newBook);
    this.newBook = {
      title: null,
      author: null,
      price: null,
      rating: 0,
      numRatings: 0
    };
  }
}
