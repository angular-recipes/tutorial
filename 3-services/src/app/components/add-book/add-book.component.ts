import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onBookAdd(title : string, author: string, price: string) {
    let newBook : Book = {
      title: title,
      author: author,
      price: +price,
      rating: 0,
      numRatings: 0
    };

    this.onAdd.emit(newBook);
  }

}
