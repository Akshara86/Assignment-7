import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];
  private isFavoritesVisible = false;
  constructor() { }
  toggleFavoritesVisibility() {
    this.isFavoritesVisible = !this.isFavoritesVisible;
    // You can also add logic here to notify components about the visibility change if needed.
  }
  getFavorites() {
    return this.favorites;
  }

  addToFavorites(item: any) {
    this.favorites.push(item);
  }

  removeFromFavorites(item: any) {
    const index = this.favorites.indexOf(item);
    if (index >= 0) {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(item: any) {
    return this.favorites.includes(item);
  }
}
