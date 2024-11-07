import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whatonmind',
  standalone: true,
  imports: [],
  templateUrl: './whatonmind.component.html',
  styleUrl: './whatonmind.component.scss'
})
export class WhatonmindComponent {
  constructor(private router: Router) {}

  goToDefault() {
    this.router.navigate(['/default']);
  }

  currentPosition: number = 0;
  itemWidth: number = 370; // Adjust based on image size and desired layout

  scrollLeft(): void {
    this.currentPosition += this.itemWidth;
    this.updateCarousel();
  }

  scrollRight(): void {
    this.currentPosition -= this.itemWidth;
    this.updateCarousel();
  }

  private updateCarousel(): void {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      const maxScroll = -(carousel.scrollWidth - carousel.clientWidth);
      // Boundary checks
      if (this.currentPosition > 0) {
        this.currentPosition = 0;
      } else if (this.currentPosition < maxScroll) {
        this.currentPosition = maxScroll;
      }
      carousel.style.transform = `translateX(${this.currentPosition}px)`;
    }
  }
}
