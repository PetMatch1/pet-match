import { Component, Input } from '@angular/core';
import { Dogs } from '../dogs-sample';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() products: String[] = [];
}
