import { Component } from '@angular/core';
import { Listing, Product } from '../datatypes';
import { Location } from '../datatypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private http: HttpClient) {}
  Dogs: any = {}
  Listings: Product[] = []
  ngOnInit() {
    let config = new ConfigService(this.http);
    config.getProducts("{}").subscribe(data => {
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
    let optionsParsed= JSON.parse(options)
    config.getProducts(optionsParsed).subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
  }
}
