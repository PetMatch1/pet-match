import { Component } from '@angular/core';
import { Listing } from '../datatypes';
import { Location } from '../datatypes';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { getResponse } from '../datatypes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor (private http: HttpClient) {}
  Dogs: any = {}
  Listings: Listing[] = []
  ngOnInit() {
    this.http.get<getResponse>(location.origin + '/.netlify/functions/get_listings').subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
  }
}
