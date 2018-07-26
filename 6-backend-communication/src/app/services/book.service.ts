import { Http } from '@angular/http';
import { AppModule } from './../app.module';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/books';

  constructor(private http: Http) { }

  getBooks(){
    return this.http.get(this.url);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  rateBook(book: Book, userRating: number) {
    book.rating = (book.rating * book.numRatings + userRating) / (book.numRatings + 1);
    book.numRatings++;

    return this.http.put(this.url + '/' + book.id, book);
  }

}
