import { Book } from './../models/book';
import { Cart, Item } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = {
    items: [],
    totalPrice: 0
  };

  constructor() { }

  getCart(): Cart {
    return this.cart;
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
