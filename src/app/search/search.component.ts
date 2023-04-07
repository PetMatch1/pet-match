import { Component } from '@angular/core';
import { Listing } from '../datatypes';
import { Location } from '../datatypes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Dogs: Listing[] = [
    {
      Name: 'Bella',
      Breed: 'Poodle',
      Age: 2,
      Gender: "Male",
      Price: 1000,
      Photo: [
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
      ]
    },
    {
      Name: 'Bella',
      Breed: 'Poodle',
      Age: 2,
      Gender: "Male",
      Price: 1000,
      Photo: [
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
      ]
    }
  ]
}
