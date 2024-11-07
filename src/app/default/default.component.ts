import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FavoritesService } from '../favorites.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  showFavorites = false;  // Flag to control the visibility of favorites section
  favorites:any[] = [];

  constructor(private cartService: CartService, public favoritesService: FavoritesService) {}

  items = [
    { name: 'Mini Chicken Biryani', price: 217, quantity: 1, imageUrl: 'assets/Biryani/bpic1.avif' },
    { name: 'Chicken Dum Biryani', price: 440, quantity: 1, imageUrl: 'assets/Biryani/bpic3.avif' },
    { name: 'Mla Potlam Biryani', price: 560, quantity: 1, imageUrl: 'assets/Biryani/bpic2.avif' },
    { name: 'Ulavacharu Mutton Biryani', price: 560, quantity: 1, imageUrl: 'assets/Biryani/bpic4.avif' }
  ];

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
    this.favorites = this.favoritesService.getFavorites();
  }

  addItemToCart(item: any) {
    this.cartService.addToCart(item);
  }

  addItemToFavorites(item: any) {
    this.favoritesService.addToFavorites(item);
  }
}
