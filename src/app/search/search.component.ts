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
    });
  }
}
