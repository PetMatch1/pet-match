import { Component, Input } from '@angular/core';
import { Product } from '../datatypes';

@Component({
  selector: 'app-pet-store-products',
  templateUrl: './pet-store-products.component.html',
  styleUrls: ['./pet-store-products.component.css']
})
export class PetStoreProductsComponent {
  @Input() products: Product[] = [];

  purchaseProduct(product: any) {
    window.alert(`You have purchased ${product.name} for ${product.price}.`);
  }
}
