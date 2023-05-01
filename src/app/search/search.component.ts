import { Component } from '@angular/core';
import { Listing } from '../datatypes';
import { Location } from '../datatypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private http: HttpClient) {}
  Dogs: any = {}
  Listings: Listing[] = []
  ngOnInit() {
    let config = new ConfigService(this.http);
    config.getListings({}).subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
  }
  newFilter(options: string){
    let config = new ConfigService(this.http);
    let key: any;
    let optionsParsed = JSON.parse(options)
    console.log(optionsParsed)
    let minPrice: number = optionsParsed[1];
    let maxPrice: number = optionsParsed[2];
    optionsParsed = JSON.parse(optionsParsed[0]);
    config.getListings(optionsParsed).subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.price > maxPrice || listing.price < minPrice) {
          this.Listings.splice(this.Listings.indexOf(listing), 1);
          continue;
        }
        for (key of Object.keys(optionsParsed)) {
          if (Object(listing)[key] != optionsParsed[key]){
            this.Listings.splice(this.Listings.indexOf(listing), 1);
            break;
          }
        }
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
  }
}
