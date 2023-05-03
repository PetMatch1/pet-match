import { Component, Input } from '@angular/core';
import { Listing } from '../datatypes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Listing = {
    _id: '',
    seller: '',
    price: 0,
    name: '',
    age: 0,
    breed: '',
    breed_size: '',
    color: '',
    gender: '',
    isActive: false,
    startDate: '',
    endDate: '',
    traitList: [],
    isBid: false,
    bid_list: [],
    zipcode: '',
    photo: ''
  };
}
