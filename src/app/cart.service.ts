// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  clearCart() {
    throw new Error('Method not implemented.');
  }
  private items: CartItem[] = [];

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  getCartItems() {
    return this.items;
  }

  getTotalCost() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCartCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
}
