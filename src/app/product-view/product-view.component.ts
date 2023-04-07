import { Component, Input } from '@angular/core';
import { Listing } from '../datatypes';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() products: Listing[] = [];
}
