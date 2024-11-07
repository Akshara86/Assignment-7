import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BestplacesComponent } from '../bestplaces/bestplaces.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { WhatonmindComponent } from '../whatonmind/whatonmind.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,BestplacesComponent,RestaurantsComponent,WhatonmindComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
