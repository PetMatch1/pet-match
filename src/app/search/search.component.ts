import { Component } from '@angular/core';
import { Listing } from '../datatypes';
import { Location } from '../datatypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  constructor(private http: HttpClient, private auth: AuthService) {}
  Dogs: any = {}
  Listings: Listing[] = []
  isUser: boolean = false
  ngOnInit() {
    let config = new ConfigService(this.http);
    config.getListings("{}").subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
    this.auth.isAuthenticated$.subscribe(data => {
      if (data){
        this.isUser = true
      }
    })
  }
  newFilter(options: string){
    let config = new ConfigService(this.http);
    let optionsParsed= JSON.parse(options)
    config.getListings(optionsParsed).subscribe(data => {
      this.Listings = JSON.parse(data.body);
      for (let listing of this.Listings) {
        if (listing.photo == undefined) {
          listing.photo = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      }
    });
  }
}
