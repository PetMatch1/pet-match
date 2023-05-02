import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from '../config.service';
import { Listing } from '../datatypes';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient){}
  listing: Listing = {
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
  }
  formatDate(date: string){
    let dateObj = new Date(date)
    return dateObj.toLocaleDateString()
  }
  auctionOrBuy(listing: Listing){
    if (listing.isBid){
      return "Auction"
    } else {
      return "Buy Now"
    }
  }
  buy (listing: Listing){
    window.alert(`You have purchased ${listing.name} for $${listing.price}!`)
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        let idObject = {
          id: [params["id"]]
        }
        let config = new ConfigService(this.http);
        config.getListings(JSON.stringify(idObject)).subscribe(data => {
          this.listing = JSON.parse(data.body)[0]
          console.log(this.listing)
        })

    })
  }
}
