import { Component } from '@angular/core';
import { WhatonmindComponent } from '../whatonmind/whatonmind.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { BestplacesComponent } from '../bestplaces/bestplaces.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent,WhatonmindComponent,CommonModule,FooterComponent,BestplacesComponent,RestaurantsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartVisible = false;  // New property to track cart visibility

  constructor(public cartService: CartService,public favoritesService: FavoritesService,private router: Router) {}
  
  toggleFavorites() {
    this.favoritesService.toggleFavoritesVisibility();
  }
  navigateToFavorites() {
    this.router.navigate(['/favorites']); // Adjust route as needed
  }

  getFavorites(): any[] {
    return this.favoritesService.getFavorites();
  }
  toggleCartVisibility() {
    this.cartVisible = !this.cartVisible;
  }
  placeOrder() {
    // Retrieve user details from authentication
    const loggedInUser = localStorage.getItem('loggedInUser'); // Assuming user info is stored under 'loggedInUser'
    const user = loggedInUser ? JSON.parse(loggedInUser) : null;

    if (user) {
      const orderDetails = {
        items: this.cartService.getCartItems(),
        totalCost: this.cartService.getTotalCost(),
        date: new Date().toLocaleString()
      };

      // Store orders for each user under a unique key based on user ID or username
      const userOrdersKey = `orders_${user.id}`;
      let userOrders = JSON.parse(localStorage.getItem(userOrdersKey) || '[]');

      // Append the new order to the user's previous orders
      userOrders.push(orderDetails);

      // Save updated orders in local storage
      localStorage.setItem(userOrdersKey, JSON.stringify(userOrders));

      // Clear the cart after placing the order
      this.cartService.clearCart();
      this.cartVisible = false;
      alert('Order placed successfully!');
    } else {
      alert('User not logged in');
    }
  }
}
