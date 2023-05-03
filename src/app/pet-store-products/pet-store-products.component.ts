import { Component, Input } from '@angular/core';
import { Listing } from '../datatypes';

@Component({
  selector: 'app-pet-store-products',
  templateUrl: './pet-store-products.component.html',
  styleUrls: ['./pet-store-products.component.css']
})
export class PetStoreProductsComponent {
  @Input() products: Listing[] = [];
}